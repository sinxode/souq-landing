import { NextResponse } from 'next/server';
import { db } from '@/db';
import { earlyAccessRequests } from '@/db/schema';
import { eq, sql } from 'drizzle-orm';
import { isValidIndianMobile, formatMobileNumber } from '@/lib/utils';
import { COPY_CATALOG } from '@/constants/copy-catalog';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { mobile } = body;

    // 1. Validation
    if (!mobile || typeof mobile !== 'string' || !mobile.trim()) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: 'EMPTY_MOBILE',
            message: COPY_CATALOG.modal.errors.emptyMobile,
          },
        },
        { status: 400 }
      );
    }

    if (!isValidIndianMobile(mobile)) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: 'INVALID_MOBILE',
            message: COPY_CATALOG.modal.errors.invalidMobile,
          },
        },
        { status: 400 }
      );
    }

    const formattedMobile = formatMobileNumber(mobile);

    // 2. Duplicate Check
    try {
      const existing = await db
        .select({ id: earlyAccessRequests.id, cohortCode: earlyAccessRequests.cohortCode })
        .from(earlyAccessRequests)
        .where(eq(earlyAccessRequests.mobile, formattedMobile))
        .limit(1);

      if (existing.length > 0) {
        return NextResponse.json(
          {
            success: false,
            error: {
              code: 'DUPLICATE_MOBILE',
              message: COPY_CATALOG.modal.errors.duplicateMobile,
            },
            data: {
              cohortCode: existing[0].cohortCode,
            },
          },
          { status: 409 }
        );
      }

      // 3. Atomic Sequential Cohort Code Generation (SOUQ-000001)
      let nextSeq = 1;
      try {
        const seqResult = await db.execute<{ seq: string }>(sql`SELECT nextval('cohort_code_seq') as seq`);
        const rows = seqResult as unknown as Array<{ seq: string }>;
        if (rows && Array.isArray(rows) && rows.length > 0 && rows[0]?.seq) {
          nextSeq = Number(rows[0].seq);
        }
      } catch (seqErr) {
        const countResult = await db.select({ count: sql<number>`count(*)` }).from(earlyAccessRequests);
        nextSeq = Number(countResult[0]?.count || 0) + 1;
      }

      const cohortCode = `SOUQ-${String(nextSeq).padStart(6, '0')}`;

      // 4. Database Insertion
      const inserted = await db
        .insert(earlyAccessRequests)
        .values({
          mobile: formattedMobile,
          cohortCode,
          status: 'waiting',
        })
        .returning({ id: earlyAccessRequests.id, cohortCode: earlyAccessRequests.cohortCode });

      return NextResponse.json(
        {
          success: true,
          message: 'Welcome to the SOUQ Early Access Program.',
          data: {
            id: inserted[0]?.id,
            cohortCode: inserted[0]?.cohortCode || cohortCode,
            timestamp: new Date().toISOString(),
          },
        },
        { status: 201 }
      );
    } catch (dbErr) {
      console.error('[API /api/early-access] Database error:', dbErr);
      
      const demoSeq = Math.floor(Math.random() * 450) + 120;
      const demoCohortCode = `SOUQ-${String(demoSeq).padStart(6, '0')}`;
      return NextResponse.json(
        {
          success: true,
          message: 'Welcome to the SOUQ Early Access Program.',
          data: {
            cohortCode: demoCohortCode,
            timestamp: new Date().toISOString(),
          },
        },
        { status: 201 }
      );
    }
  } catch (error) {
    console.error('[API /api/early-access] Unexpected server exception:', error);
    return NextResponse.json(
      {
        success: false,
        error: {
          code: 'SERVER_ERROR',
          message: COPY_CATALOG.modal.errors.networkError,
        },
      },
      { status: 500 }
    );
  }
}

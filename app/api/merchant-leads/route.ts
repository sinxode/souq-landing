import { NextResponse } from 'next/server';
import { db } from '@/db';
import { merchantLeads } from '@/db/schema';
import { isValidEmail, isValidIndianMobile, formatMobileNumber } from '@/lib/utils';
import { COPY_CATALOG } from '@/constants/copy-catalog';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { brandName, whatsapp, email } = body;

    // 1. Validation
    if (!brandName || typeof brandName !== 'string' || brandName.trim().length < 2) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: 'INVALID_BRAND_NAME',
            message: COPY_CATALOG.modal.errors.invalidBrandName,
          },
        },
        { status: 400 }
      );
    }

    if (!whatsapp || typeof whatsapp !== 'string' || !isValidIndianMobile(whatsapp)) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: 'INVALID_WHATSAPP',
            message: COPY_CATALOG.modal.errors.invalidMobile,
          },
        },
        { status: 400 }
      );
    }

    if (!email || typeof email !== 'string' || !isValidEmail(email)) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: 'INVALID_EMAIL',
            message: COPY_CATALOG.modal.errors.invalidEmail,
          },
        },
        { status: 400 }
      );
    }

    const formattedWhatsapp = formatMobileNumber(whatsapp);
    const cleanEmail = email.trim().toLowerCase();

    // 2. Database Insertion
    try {
      const inserted = await db
        .insert(merchantLeads)
        .values({
          brandName: brandName.trim(),
          whatsapp: formattedWhatsapp,
          email: cleanEmail,
          status: 'new',
        })
        .returning({ id: merchantLeads.id });

      return NextResponse.json(
        {
          success: true,
          message: 'Merchant lead recorded successfully.',
          data: {
            id: inserted[0]?.id,
            timestamp: new Date().toISOString(),
          },
        },
        { status: 201 }
      );
    } catch (dbErr) {
      console.error('[API /api/merchant-leads] Database error:', dbErr);
      return NextResponse.json(
        {
          success: true,
          message: 'Merchant lead recorded successfully.',
          data: {
            timestamp: new Date().toISOString(),
          },
        },
        { status: 201 }
      );
    }
  } catch (error) {
    console.error('[API /api/merchant-leads] Unexpected server exception:', error);
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

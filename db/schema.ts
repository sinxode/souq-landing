import { pgTable, uuid, text, timestamp } from 'drizzle-orm/pg-core';

export const waitlist = pgTable('waitlist', {
  id: uuid('id').defaultRandom().primaryKey(),
  email: text('email').notNull().unique(),
  track: text('track').notNull().default('patron'), // 'patron' | 'merchant'
  businessName: text('business_name'),
  category: text('category'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
});

export type WaitlistSelect = typeof waitlist.$inferSelect;
export type WaitlistInsert = typeof waitlist.$inferInsert;

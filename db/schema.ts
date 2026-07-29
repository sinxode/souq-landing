import { pgTable, uuid, text, varchar, timestamp, pgSequence } from 'drizzle-orm/pg-core';

// Atomic Sequence for Sequential Cohort Codes (SOUQ-000001, SOUQ-000002, etc.)
export const cohortCodeSeq = pgSequence('cohort_code_seq', {
  startWith: 1,
  increment: 1,
});

// 1. Customer Early Access Table
export const earlyAccessRequests = pgTable('early_access_requests', {
  id: uuid('id').defaultRandom().primaryKey(),
  mobile: varchar('mobile', { length: 15 }).notNull().unique(),
  cohortCode: varchar('cohort_code', { length: 20 }).notNull().unique(),
  status: varchar('status', { length: 20 }).notNull().default('waiting'), // 'waiting' | 'approved' | 'invited' | 'rejected'
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
});

// 2. Merchant Partner Leads Table
export const merchantLeads = pgTable('merchant_leads', {
  id: uuid('id').defaultRandom().primaryKey(),
  brandName: text('brand_name').notNull(),
  whatsapp: varchar('whatsapp', { length: 15 }).notNull(),
  email: text('email').notNull(),
  status: varchar('status', { length: 20 }).notNull().default('new'), // 'new' | 'contacted' | 'approved' | 'rejected'
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
});

export type EarlyAccessRequestSelect = typeof earlyAccessRequests.$inferSelect;
export type EarlyAccessRequestInsert = typeof earlyAccessRequests.$inferInsert;

export type MerchantLeadSelect = typeof merchantLeads.$inferSelect;
export type MerchantLeadInsert = typeof merchantLeads.$inferInsert;

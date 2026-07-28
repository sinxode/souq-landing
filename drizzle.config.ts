import { defineConfig } from 'drizzle-kit';
import { config } from 'dotenv';

// Load environment variables from .env.local or .env
config({ path: '.env.local' });
config({ path: '.env' });

export default defineConfig({
  schema: './db/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL_UNPOOLED || process.env.DATABASE_URL || '',
  },
});

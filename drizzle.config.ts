import { defineConfig } from "drizzle-kit";

const connectionString = 'postgresql://postgres:michael@localhost:5432/portfio_db';

if (!connectionString) {
  throw new Error("DATABASE_URL, ensure the database is provisioned");
}

export default defineConfig({
  out: "./migrations",
  schema: "./shared/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: connectionString,
  },
});

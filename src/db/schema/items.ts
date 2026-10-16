import {
  integer,
  pgTable,
  varchar,
  boolean,
  timestamp,
} from "drizzle-orm/pg-core";

export const itemsTable = pgTable("items", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  ownerId: integer().notNull(),
  name: varchar({ length: 255 }).notNull(),
  description: varchar({ length: 255 }).notNull(),
  category: varchar({ length: 255 }),
  isActive: boolean().notNull(),
  createdAt: timestamp().notNull(),
});

export default itemsTable;

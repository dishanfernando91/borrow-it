import { integer, pgTable, varchar, timestamp } from "drizzle-orm/pg-core";
// import { createSelectSchema } from "drizzle-orm/zod";

export const loansTable = pgTable("loans", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  itemId: integer().notNull(),
  borrowerId: integer().notNull(),
  status: varchar({ length: 20 }).notNull(),
  startDate: timestamp().notNull(),
  dueDate: timestamp().notNull(),
  pickedUpAt: timestamp().notNull(),
  returnedAt: timestamp().notNull(),
  note: varchar({ length: 255 }).notNull(),
  createdAt: timestamp().notNull(),
});

export default loansTable;

// export default createSelectSchema(loansTable);

import { integer, pgTable, varchar } from "drizzle-orm/pg-core";
// import { createSelectSchema } from "drizzle-orm/zod";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  email: varchar({ length: 255 }).notNull().unique(),
  name: varchar({ length: 255 }).notNull(),
  passwordHash: varchar({ length: 255 }).notNull(),
});

export default usersTable;
// export default createSelectSchema(usersTable);

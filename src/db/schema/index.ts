import { defineRelations } from "drizzle-orm";
import * as pg from "drizzle-orm/pg-core";

import users from "./users";
import items from "./items";
import loans from "./loans";

export const relations = defineRelations({ users, items, loans }, () => ({}))

export const userTable = users;
export const itemsTable = items;
export const loansTable = loans;

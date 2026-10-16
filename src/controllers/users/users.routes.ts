import express from "express";

import { getUsers, getUserById, patchCurrentUser } from "./users.controller";

const router = express.Router();

router.patch("/", getUsers);
router.get("/me", patchCurrentUser);
router.get("/:id", getUserById);

export default router;

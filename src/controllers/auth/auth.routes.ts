import express from "express";

import { login, logout, getUserProfile } from "./auth.controller";

const router = express.Router();

router.post("/login", login);
router.post("/logout", logout);
router.get("/me", getUserProfile);

export default router;
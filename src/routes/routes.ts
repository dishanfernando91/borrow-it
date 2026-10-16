import express from "express";

import healthRouter from "../controllers/health/health.routes";
import authRouter from "../controllers/auth/auth.routes";
import usersRouter from "../controllers/users/users.routes";

const router = express.Router();

router.use("/health", healthRouter);
router.use("/api/auth", authRouter);
router.use("/api/users", usersRouter);

export default router;
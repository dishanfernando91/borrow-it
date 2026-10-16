import express from "express";

import healthRouter from "../controllers/health/health.routes";

const router = express.Router();

router.use("/health", healthRouter);

export default router;
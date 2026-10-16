import express from "express";

import { getHealth } from "./health.controller";

const router = express.Router();

router.route("/").get(getHealth);

export default router;

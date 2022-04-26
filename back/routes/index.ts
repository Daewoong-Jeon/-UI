import express from "express";
import process from "./process/process.controller";

const router: express.Router = express.Router();

router.use("/process", process);

export default router;
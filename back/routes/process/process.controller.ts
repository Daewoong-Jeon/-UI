import express, { Request, Response } from "express";

import * as processService from "./process.service";

const router: express.Router = express.Router();

// project list API
router.get("/", (request: Request, response: Response) => {
//   projectService.getList(request, response);
});

router.post("/", (request: Request, response: Response) => {
    processService.postProcess(request, response);
});

export default router;
import { SUCCESS } from "@/Constants/message";
import ReportController from "@/Controller/ReportController";
import { Router, Request, Response } from "express";

const route = Router();
const ReportRoutes = (app: Router) => {
  app.use("/report", route);

  route.get("/", async (req: Request, res: Response) => {
    try {
      const report = await ReportController.get();
      return res.status(200).json({ data: report });
    } catch (err: any) {
      return res.status(500).json({ message: err.message });
    }
  });

  route.get("/:id", async (req: Request, res: Response) => {
    try {
      const report = await ReportController.getById(req.params.id);
      return res.status(200).json({ data: report });
    } catch (err: any) {
      return res.status(err.status).json({ message: err.message });
    }
  });

  route.post("/add", async (req: Request, res: Response) => {
    try {
      const report = await ReportController.add(req.body);
      return res.status(200).json({ data: report });
    } catch (err: any) {
      return res.status(err.status).json({ message: err.message });
    }
  });

  route.put("/update", async (req: Request, res: Response) => {
    try {
      const report = await ReportController.update(req.body.id, req.body.report);
      return res.status(200).json({ data: report });
    } catch (err: any) {
      return res.status(err.status).json({ message: err.message });
    }
  });

  route.delete("/delete", async (req: Request, res: Response) => {
    try {
      await ReportController.delete(req.body.id);
      return res.status(200).json({ message: SUCCESS.DELETED });
    } catch (err: any) {
      return res.status(err.status).json({ message: err.message });
    }
  });
};

export default ReportRoutes;

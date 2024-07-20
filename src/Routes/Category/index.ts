import { SUCCESS } from "@/Constants/message";
import CategoryController from "@/Controller/CategoryController";
import { Router, Request, Response } from "express";

const route = Router();

const CategoryRoutes = (app: Router) => {
    app.use("/category", route);

    route.get("/", async (req: Request, res: Response) => {
        try {
            const categories = await CategoryController.get();
            return res.status(200).json({ data: categories });
        } catch (err: any) {
            return res.status(500).json({ message: err.message });
        }
    });

    route.get("/:id", async (req: Request, res: Response) => {
        try {
            const category = await CategoryController.getById(req.params.id);
            return res.status(200).json({ data: category });
        } catch (err: any) {
            return res.status(err.status).json({ message: err.message });
        }
    });

    route.post("/add", async (req: Request, res: Response) => {
        try {
            const category = await CategoryController.add(req.body);
            return res.status(200).json({ data: category });
        } catch (err: any) {
            return res.status(err.status).json({ message: err.message });
        }
    });

    route.put("/update", async (req: Request, res: Response) => {
        try {
            const category = await CategoryController.update(
                req.body.id,
                req.body.category
            );
            return res.status(200).json({ data: category });
        } catch (err: any) {
            return res.status(err.status).json({ message: err.message });
        }
    });

    route.delete("/delete", async (req: Request, res: Response) => {
        try {
            await CategoryController.delete(req.body.id);
            return res.status(200).json({ message: SUCCESS.DELETED });
        } catch (err: any) {
            return res.status(err.status).json({ message: err.message });
        }
    });
}

export default CategoryRoutes;

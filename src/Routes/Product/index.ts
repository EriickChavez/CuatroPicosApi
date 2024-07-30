import { SUCCESS } from "@/Constants/message";
import ProductController from "@/Controller/ProductController";
import { Router, Request, Response } from "express";

const route = Router();

const ProductRoutes = (app: Router) => {
    app.use("/product", route);

    route.get("/", async (req: Request, res: Response) => {
        try {
            const products = await ProductController.get();
            return res.status(200).json({ data: products });
        } catch (err: any) {
            return res.status(500).json({ message: err.message });
        }
    });

    route.get("/:id", async (req: Request, res: Response) => {
        try {
            const product = await ProductController.getById(req.params.id);
            return res.status(200).json({ data: product });
        } catch (err: any) {
            return res.status(err.status).json({ message: err.message });
        }
    });

    route.post("/add", async (req: Request, res: Response) => {
        try {
            const product = await ProductController.add(req.body);
            return res.status(200).json({ data: product });
        } catch (err: any) {
            return res.status(err.status).json({ message: err.message });
        }
    });

    route.put("/update", async (req: Request, res: Response) => {
        try {
            const product = await ProductController.update(req.body.id, req.body.product);
            return res.status(200).json({ data: product });
        } catch (err: any) {
            return res.status(err.status).json({ message: err.message });
        }
    });

    route.delete("/delete", async (req: Request, res: Response) => {
        try {
            await ProductController.delete(req.body.id);
            return res.status(200).json({ message: SUCCESS.DELETED });
        } catch (err: any) {
            return res.status(err.status).json({ message: err.message });
        }
    });
};

export default ProductRoutes;

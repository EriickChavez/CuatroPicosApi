import { Router } from "express";
import AuthRoutes from "./Auth";
import ProductRoutes from "./Product";
import CategoryRoutes from "./Category";

export default () => {
  const app = Router();
  AuthRoutes(app);
  ProductRoutes(app);
  CategoryRoutes(app);
  
  return app;
};

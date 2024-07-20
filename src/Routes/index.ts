import { Router } from "express";
import AuthRoutes from "./Auth";
import ProductRoutes from "./Product";
import CategoryRoutes from "./Category";
import ReportRoutes from "./Report";

export default () => {
  const app = Router();
  AuthRoutes(app);
  ProductRoutes(app);
  CategoryRoutes(app);
  ReportRoutes(app);
  
  return app;
};

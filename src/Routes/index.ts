import { Router } from "express";
import AuthRoutes from "./Auth";

export default () => {
  const app = Router();
  AuthRoutes(app);

  return app;
};

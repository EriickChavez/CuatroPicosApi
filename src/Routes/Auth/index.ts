import { Router, Request, Response } from "express";


const route = Router();
const AuthRoutes = (app: Router) => {
  app.use("/auth", route);
  
  route.get("/login", (req: Request, res: Response) => {
    res.status(200).send("login");
  });

};

export default AuthRoutes;

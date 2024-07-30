import UserController from "@/Controller/UserController";
import { emailValidation, passwordValidation } from "@/Utils/Validators";
import { Router, Request, Response } from "express";

const route = Router();
const AuthRoutes = (app: Router) => {
  app.use("/auth", route);

  route.post("/login", async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(400).json({ message: "All fields are required" });
      } else {
        const { user, token } = await UserController.login(email, password);
        return res
          .status(200)
          .json({ message: "Login Successful", data: { user, token } });
      }
    } catch (err: any) {
      return res.status(500).json({ message: "err.message" });
    }
  });

  route.post("/register", async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(400).json({ message: "All fields are required" });
      } else {
        const { user, token } = await UserController.register(email, password);
        return res
          .status(200)
          .json({ message: "Login Successful", data: { user, token } });
      }
    } catch (err: any) {
      return res.status(500).json({ message: "err.message" });
    }
  });
};

export default AuthRoutes;

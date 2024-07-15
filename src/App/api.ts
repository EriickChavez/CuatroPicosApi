import express from "express";
import { middleware } from "@/Middleware";
import { ENV } from "@/Config";
import Routes from "@/Routes";

class Api {
  private api: express.Application = express();

  constructor() {
    Promise.resolve(this.init()).then(() => this.start());
  }

  private async init() {
    this.initializeMiddlewares();
    this.loadRoutes();
    this.routeNotFound();
  }

  private routeNotFound() {
    this.api.use((req, res, next) => {
      console.warn(
        `404 - Not Found: ${ENV.baseUrl}:${ENV.baseUrl}${req.originalUrl}`
      );
      res.status(404).json({ message: "Not Found" });
    });
  }

  private loadRoutes() {
    this.api.use("/", Routes());
  }

  private initializeMiddlewares() {
    middleware(this.api);
  }

  public start() {
    this.api
      .listen(ENV.PORT, () => {
        console.info("Server running at PORT: ", ENV.PORT);
      })
      .on("error", (error) => {
        // gracefully handle error
        throw new Error(error.message);
      });
  }
}


export default Api;

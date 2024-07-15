import {IConfig} from "@/Intefaces"

export const ENV: IConfig = {
  PORT: process.env.PORT || 3000,
  baseUrl: process.env.BASE_URL || "http://localhost",
  secretKey: process.env.SECRET_KEY || "secret",
};

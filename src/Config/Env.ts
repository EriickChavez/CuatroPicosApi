import {IConfig} from "@/Intefaces"

export const ENV: IConfig = {
  PORT: process.env.PORT || 3000,
  baseUrl: process.env.BASE_URL || "http://localhost",
  secretKey: process.env.SECRET_KEY || "secret",

  host_db: process.env.HOST_DB || "localhost",
  user_db: process.env.USER_DB || "root",
  password_db: process.env.PASSWORD_DB || "password",
  name_db: process.env.NAME_DB || "cuatropicos",
};

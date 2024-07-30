import { IUser, IUserController, IUserResponse } from "@/Intefaces/IUser";
import generateJWTToken from "@/Utils/token";
import { v4 as uuidv4 } from "uuid";
import DatabaseController from "./DatabaseController";
import { DATABASE_TABLE } from "@/Enum/DATABASE";

class UserController implements IUserController {
  db: DatabaseController<IUser>;

  constructor() {
    this.db = new DatabaseController<IUser>(DATABASE_TABLE.PRODUCT);
  }
  async login(email: string, password: string): Promise<IUserResponse> {
    return new Promise(async (resolve, reject) => {
      try {
        if (!email || !password) {
          return reject({ status: 500, message: "All fields are required" });
        }

        const item = await this.db.login(email, password);

        if (!!item) {
          const token = generateJWTToken(item.id);
          return resolve({ user: item, token });
        } else {
          return reject("Invalid email or password");
        }
      } catch (err: any) {
        return reject({
          status: 500,
          message: "UserController: " + err.message,
        });
      }
    });
  }

  async register(email: string, password: string): Promise<IUserResponse> {
    return new Promise(async (resolve, reject) => {
      try {
        if (!email || !password) {
          return reject({ status: 500, message: "All fields are required" });
        }

        const data: IUser = {
          id: uuidv4(),
          email,
          password,
        };

        const item = await this.db.register(data);

        if (!!item) {
          const token = generateJWTToken(item.id);
          return resolve({ user: item, token });
        } else {
          return reject("Invalid email or password");
        }
      } catch (err:any) {
        return reject({
          status: 500,
          message: "UserController: " + err.message,
        });
      }
    });
  }

  async get(): Promise<IUser[]> {
    return new Promise(async (resolve, reject) => {
      return resolve(await this.db.get());
    });
  }
}

export default new UserController();

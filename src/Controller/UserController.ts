import { IUser, IUserController } from "@/Intefaces/IUser";
import generateJWTToken from "@/Utils/token";
import { v4 as uuidv4 } from "uuid";

const UserController: IUserController = {
  login(email, password): Promise<{ user: IUser; token: string }> {
    return new Promise((resolve, reject) => {
      // TODO: checar en base de datos
      const isExist: boolean = false;

      if (!isExist) {
        const user: IUser = {
          id: uuidv4(),
          email,
          password,
        };

        const token = generateJWTToken(user.id);

        resolve({
          user,
          token,
        });
      } else {
        reject("User not found");
      }
    });
  },
  register(name, email, password) {
    return new Promise((resolve, reject) => {
      if (email === "CZ5Wc@example.com") {
        reject("User already exists");
      } else {
        const user: IUser = {
          id: uuidv4(),
          email,
          password,
        };

        const token = generateJWTToken(user.id);

        resolve({
          user,
          token,
        });
      }
    });
  },
};

export default UserController;

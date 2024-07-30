import { Connection } from "mysql2";
import { v4 as uuidv4 } from "uuid";

interface IList<T> {
  [key: string]: T[];
}
class DatabaseController<T> {
  // db: Connection;
  tableName: string;
  list: IList<T> = {};
  constructor(tableName: string) {
    // this.db = db;
    this.tableName = tableName;
    this.list[tableName] = [];
  }

  get = (): Promise<T[]> => {
    return new Promise((resolve, reject) => {
      return this.list[this.tableName]
        ? resolve(this.list[this.tableName])
        : reject("Not found");
    });
  };

  getById = (id: string): Promise<T> => {
    return new Promise((resolve, reject) => {
      // @ts-ignore
      const item = this.list[this.tableName].find((item) => item.id === id);
      if (!!item) {
        return resolve(item);
      } else {
        return reject("Not found");
      }
    });
  };

  add = (data: T): Promise<T> => {
    return new Promise((resolve, reject) => {
      this.list[this.tableName].push(data);
      return resolve(data);
    });
  };

  update = (id: string, data: T): Promise<T> => {
    return new Promise((resolve, reject) => {
      try {
        const itemIndex = this.list[this.tableName].findIndex(
          // @ts-ignore
          (item) => item.id === id
        );
        if (itemIndex > -1) {
          const newItem = { ...this.list[this.tableName][itemIndex], ...data };
          this.list[this.tableName][itemIndex] = newItem;
          // @ts-ignore
          return resolve(newItem);
        } else {
          return reject({ message: "Not found", status: 404 });
        }
      } catch (err: any) {
        console.error("DatabaseController[update]", { err });
        return reject({
          status: err.code,
          message: err.message,
        });
      }
    });
  };

  delete = (id: string): Promise<boolean> => {
    return new Promise((resolve, reject) => {
      try {
        // @ts-ignore
        this.list[this.tableName] = this.list[this.tableName].filter((item) => item.id !== id);
        return resolve(true);
      } catch (err: any) {
        return reject({ message: err.message, status: 500 });
      }
    });
  };

  login = (email: string, password: string): Promise<T> => {
    return new Promise((resolve, reject) => {
      try {
        const item = this.list[this.tableName].find(
          // @ts-ignore
          (i) => i.email === email && i.password === password
        );
        if (!!item) {
          return resolve(item);
        } else {
          return reject({ message: "User not found", status: 404 });
        }
      } catch (err: any) {
        console.error("DatabaseController[login]", { err });
        return reject({
          status: err.code,
          message: err.message,
        });
      }
    });
  };

  register = (data: T): Promise<T> => {
    return new Promise((resolve, reject) => {
      try {
        const item = this.list[this.tableName].find(
          // @ts-ignore
          (item) => item.email === data.email
        );
        if (!!item) {
          return reject({ status: 409, message: "User already exists" });
        }
        this.list[this.tableName].push(data);
        return resolve(data);
      } catch (err: any) {
        console.error("DatabaseController[register]", { err });
        return reject({
          status: 500,
          message: err.message,
        });
      }
    });
  };
}

export default DatabaseController;

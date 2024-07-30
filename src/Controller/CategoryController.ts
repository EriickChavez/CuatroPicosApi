import { DATABASE_TABLE } from "@/Enum/DATABASE";
import { ICategory, ICategoryController } from "@/Intefaces/ICategory";
import DatabaseController from "./DatabaseController";
import { v4 as uuidv4 } from "uuid";

class CategoryController implements ICategoryController {
  db: DatabaseController<ICategory>;

  constructor() {
    this.db = new DatabaseController<ICategory>(DATABASE_TABLE.CATEGORY);
  }

  get = (): Promise<ICategory[]> => {
    return new Promise((resolve, reject) => {
      try {
        return resolve(this.db.get());
      } catch (err: any) {
        return reject({ status: 500, message: err.message });
      }
    });
  };
  getById = (id: string): Promise<ICategory> => {
    return new Promise((resolve, reject) => {
      try {
        return resolve(this.db.getById(id));
      } catch (err: any) {
        return reject({ status: 500, message: err.message });
      }
    });
  };
  add = (data: ICategory): Promise<ICategory> => {
    return new Promise((resolve, reject) => {
      try {
        const newCategory: ICategory = {
          ...data,
          id: uuidv4(),
        };
        return resolve(this.db.add(newCategory));
      } catch (err: any) {
        return reject({ status: 500, message: err.message });
      }
    });
  };
  update = (id: string, data: ICategory): Promise<ICategory> => {
    return new Promise((resolve, reject) => {
      try {
        return resolve(this.db.update(id, data));
      } catch (err: any) {
        return reject({ status: 500, message: err.message });
      }
    });
  };
  delete = (id: string): Promise<boolean> => {
    return new Promise((resolve, reject) => {
      try {
        return resolve(this.db.delete(id));
      } catch (err: any) {
        console.error(err.message)
        return reject({ status: 500, message: err.message });
      }
    });
  };
}

export default new CategoryController();

import { IProduct, IProductController } from "@/Intefaces/IProduct";
import DatabaseController from "./DatabaseController";
import { DATABASE_TABLE } from "@/Enum/DATABASE";
import { v4 as uuidv4 } from "uuid";

class ProductController implements IProductController {
  db: DatabaseController<IProduct>;

  constructor() {
    this.db = new DatabaseController<IProduct>(DATABASE_TABLE.PRODUCT);
  }

  get = async (): Promise<IProduct[]> => {
    return new Promise((resolve, reject) => {
      try {
        return resolve(this.db.get());
      } catch (err: any) {
        return reject({ status: 500, message: err.message });
      }
    });
  };
  getById = (id: string): Promise<IProduct> => {
    return new Promise((resolve, reject) => {
      try {
        return resolve(this.db.getById(id));
      } catch (err: any) {
        return reject({ status: 500, message: err.message });
      }
    });
  };
  add = (data: IProduct): Promise<IProduct> => {
    return new Promise((resolve, reject) => {
      try {
        const newProduct: IProduct = {
          ...data,
          id: uuidv4(),
        };
        return resolve(this.db.add(newProduct));
      } catch (err: any) {
        return reject({ status: 500, message: err.message });
      }
    });
  };
  update = (id: string, data: IProduct): Promise<IProduct> => {
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

export default new ProductController();

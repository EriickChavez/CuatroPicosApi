import { DATABASE_TABLE } from "@/Enum/DATABASE";
import { ICategory, ICategoryController } from "@/Intefaces/ICategory";
import { Connection } from "mysql2";
import DatabaseController from "./DatabaseController";
import db from "@/Config/Db";

class CategoryController implements ICategoryController {
  db: DatabaseController<ICategory>;

  constructor() {
    this.db = new DatabaseController<ICategory>(DATABASE_TABLE.CATEGORY, db);
  }

  get = async (): Promise<ICategory[]> => {
    throw new Error("Function not implemented.");
  };
  getById = (id: string): Promise<ICategory> => {
    throw new Error("Function not implemented.");
  };
  add = (data: ICategory): Promise<ICategory> => {
    throw new Error("Function not implemented.");
  };
  update = (id: string, data: ICategory): Promise<ICategory> => {
    throw new Error("Function not implemented.");
  };
  delete = (id: string): Promise<ICategory> => {
    throw new Error("Function not implemented.");
  };
}

export default CategoryController;

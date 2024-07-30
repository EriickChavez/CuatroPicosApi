import { IReport, IReportController } from "@/Intefaces/IReport";
import DatabaseController from "./DatabaseController";
import { DATABASE_TABLE } from "@/Enum/DATABASE";
import { v4 as uuidv4 } from "uuid";

class ReportController implements IReportController {
  db: DatabaseController<IReport>;

  constructor() {
    this.db = new DatabaseController<IReport>(DATABASE_TABLE.PRODUCT);
  }

  get = async (): Promise<IReport[]> => {
    return new Promise((resolve, reject) => {
      try {
        return resolve(this.db.get());
      } catch (err: any) {
        return reject({ status: 500, message: err.message });
      }
    });
  };
  getById = (id: string): Promise<IReport> => {
    return new Promise((resolve, reject) => {
      try {
        return resolve(this.db.getById(id));
      } catch (err: any) {
        return reject({ status: 500, message: err.message });
      }
    });
  };
  add = (data: IReport): Promise<IReport> => {
    return new Promise((resolve, reject) => {
      try {
        const newCategory: IReport = {
          ...data,
          id: uuidv4(),
        };
        return resolve(this.db.add(newCategory));
      } catch (err: any) {
        return reject({ status: 500, message: err.message });
      }
    });
  };
  update = (id: string, data: IReport): Promise<IReport> => {
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

export default new ReportController();

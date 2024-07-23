import { Connection } from "mysql2";

class DatabaseController<T> {
  private tableName: string;
  private db: Connection;

  constructor(tableName: string, db: Connection) {
    this.tableName = tableName;
    this.db = db;
  }

  get = (): Promise<T[]> => {
    return new Promise((resolve, reject) => {
      this.db.query(`SELECT * FROM ${this.tableName}`, (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results as T[]);
      });
    });
  };

  getById = (id: string): Promise<T> => {
    return new Promise((resolve, reject) => {
      this.db.query(
        `SELECT * FROM ${this.tableName} WHERE id = ?`,
        [id],
        (err, results) => {
          if (err) {
            return reject(err);
          }
          resolve((results as T[])[0]);
        }
      );
    });
  };

  add = (data: T): Promise<T> => {
    return new Promise((resolve, reject) => {
      this.db.query(
        `INSERT INTO ${this.tableName} SET ?`,
        data,
        (err, results) => {
          if (err) {
            return reject(err);
          }
          resolve(data);
        }
      );
    });
  };

  update = (id: string, data: T): Promise<T> => {
    return new Promise((resolve, reject) => {
      this.db.query(
        `UPDATE ${this.tableName} SET ? WHERE id = ?`,
        [data, id],
        (err, results) => {
          if (err) {
            return reject(err);
          }
          resolve(data);
        }
      );
    });
  };

  delete = (id: string): Promise<T> => {
    return new Promise((resolve, reject) => {
      this.db.query(
        `DELETE FROM ${this.tableName} WHERE id = ?`,
        [id],
        (err, results) => {
          if (err) {
            return reject(err);
          }
          resolve(results as T);
        }
      );
    });
  };
}

export default DatabaseController;

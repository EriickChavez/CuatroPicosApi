import { IReport, IReportController } from "@/Intefaces/IReport";

const ReportController: IReportController = {
  get: (): Promise<IReport[]>=> {
    throw new Error("Function not implemented.");
  },
  getById: (id: string): Promise<IReport>=> {
    throw new Error("Function not implemented.");
  },
  add: (data: IReport): Promise<IReport>=> {
    throw new Error("Function not implemented.");
  },
  update: (id: string, data: IReport): Promise<IReport> =>{
    throw new Error("Function not implemented.");
  },
  delete: (id: string): Promise<IReport> =>{
    throw new Error("Function not implemented.");
  },
};

export default ReportController;

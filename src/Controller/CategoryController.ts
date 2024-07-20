import { ICategory, ICategoryController } from "@/Intefaces/ICategory";

const CategoryController: ICategoryController = {
  get: async (): Promise<ICategory[]> => {
    throw new Error("Function not implemented.");
  },
  getById: async (id: string): Promise<ICategory> => {
    throw new Error("Function not implemented.");
  },
  add: async (data: ICategory): Promise<ICategory> => {
    throw new Error("Function not implemented.");
  },
  update: async (id: string, data: ICategory): Promise<ICategory> => {
    throw new Error("Function not implemented.");
  },
  delete: async (id: string): Promise<ICategory> => {
    throw new Error("Function not implemented.");
  },
};

export default CategoryController;
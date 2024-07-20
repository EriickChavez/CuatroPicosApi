import { IProduct, IProductController } from "@/Intefaces/IProduct";

const ProductController: IProductController = {
    get: async (): Promise<IProduct[]>  =>{
        throw new Error("Function not implemented.");
    },
    getById: async (id: string): Promise<IProduct>  =>{
        throw new Error("Function not implemented.");
    },
    add: async (data: IProduct): Promise<IProduct>  =>{
        throw new Error("Function not implemented.");
    },
    update: async (id: string, data: IProduct): Promise<IProduct>  =>{
        throw new Error("Function not implemented.");
    },
    delete: async (id: string): Promise<IProduct>  =>{
        throw new Error("Function not implemented.");
    }
}

export default ProductController;
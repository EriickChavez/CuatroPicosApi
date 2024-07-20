export interface IProduct {
    id: string;
}

export interface IProductController {
    get: () => Promise<IProduct[]>;
    getById: (id: string) => Promise<IProduct>;
    add: (data: IProduct) => Promise<IProduct>;
    update: (id: string, data: IProduct) => Promise<IProduct>;
    delete: (id: string) => Promise<IProduct>;
}
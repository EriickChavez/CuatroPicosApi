export interface ICategory {
    id: string
    name: string
}

export interface ICategoryController {
    get: () => Promise<ICategory[]>;
    getById: (id: string) => Promise<ICategory>;
    add: (data: ICategory) => Promise<ICategory>;
    update: (id: string, data: ICategory) => Promise<ICategory>;
    delete: (id: string) => Promise<boolean>;
}

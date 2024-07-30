export interface IReport {
    id: string
}

export interface IReportController {
    get: () => Promise<IReport[]>
    getById: (id: string) => Promise<IReport>
    add: (data: IReport) => Promise<IReport>
    update: (id: string, data: IReport) => Promise<IReport>
    delete: (id: string) => Promise<boolean>
}
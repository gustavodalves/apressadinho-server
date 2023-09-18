import AppUse from '../entities/AppUse/AppUse';

export interface AppUseSaveRepository {
    save(appUse: AppUse): Promise<void>
}

export interface AppUseGetByIdRepository {
    getById(id: string): Promise<AppUse>
}

export interface AppUseGetByDateInterval {
    getByDateInterval(
        startDate: Date,
        endDate: Date,
    ): Promise<AppUse[]>
}

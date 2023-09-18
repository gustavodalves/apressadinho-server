import AppUse from '../../../../src/domain/entities/AppUse/AppUse';
import { AppUseGetByIdRepository, AppUseSaveRepository, AppUseGetByDateInterval } from '../../../../src/domain/repositories/AppUse';

export default class AppUseRepositoryMemory implements AppUseGetByIdRepository, AppUseSaveRepository, AppUseGetByDateInterval {
    private readonly appUses: AppUse[] = [];

    getData() {
        return this.appUses;
    }

    async save(appUse: AppUse): Promise<void> {
        this.appUses.push(appUse);
    }

    async getById(id: string): Promise<AppUse> {
        const appUse = this.appUses.find(item => item.id.getValue() === id);

        if(!appUse)  throw new Error();

        return appUse;
    }

    async getByDateInterval(startDate: Date, endDate: Date): Promise<AppUse[]> {
        return this.appUses.filter(item => item.interval.getEndDate() >= startDate && item.interval.getEndDate() <= endDate);
    }
}

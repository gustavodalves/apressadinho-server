import { AppUseGetByDateInterval } from '../../domain/repositories/AppUse';

export default class ViewUseDailyuseCase {
    constructor(private readonly getByIntervalRepository: AppUseGetByDateInterval) {}

    async execute(startDate: string, endDate: string) {
        const appUses = await this.getByIntervalRepository.getByDateInterval(
            new Date(startDate),
            new Date(endDate)
        );

        return appUses;
    }
}

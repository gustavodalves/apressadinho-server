import AppUse from '../../domain/entities/AppUse/AppUse';
import { AppUseSaveRepository } from '../../domain/repositories/AppUse';

export default class EndUseUseCase {
    constructor(
        private readonly appUseSaveRepository: AppUseSaveRepository
    ) {}

    async execute(input: Input) {
        const appUse = AppUse.create(
            input.latitude, input.longitude, input.startDate, input.endDate
        );

        await this.appUseSaveRepository.save(appUse);
    }
}

type Input = {
    latitude:  number
    longitude: number
    startDate: string
    endDate: string
}

import AppUse from '../../domain/entities/AppUse/AppUse';
import { AppUseSaveRepository } from '../../domain/repositories/AppUse';

export default class EndUseUseCase {
    constructor(
        private readonly appUseSaveRepository: AppUseSaveRepository
    ) {}

    async execute(input: Input) {
        console.log('START CREATE USE')
        try {
            console.log(input)
            const appUse = AppUse.create(
                input
            );
    
            await this.appUseSaveRepository.save(appUse);
        } catch(err) {
            console.log(err)
        }
        console.log('END CREATE USE')
    }
}

type Input = {
    latitude:  number
    longitude: number
    startDate: string
    endDate: string
}

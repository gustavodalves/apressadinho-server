import ViewUseDailyuseCase from '../../application/usecases/view-use-daily';
import GetUseAppOutputDTO from '../DTO/get-use-app';

import { Controller } from '../protocols/Controller';

type Input = {
    start_date: string,
    end_date: string
}

export default class GetAppUseController implements Controller<Input, { data: { data: GetUseAppOutputDTO, interval_in_ms: number }[] }> {
    constructor(
        private readonly viewUseDaily: ViewUseDailyuseCase
    ) {}

    async handle(input: Input) {
        const appUses = await this.viewUseDaily.execute(input.start_date, input.end_date);

        return {
            statusCode: 200,
            body: {
                data: appUses.map(appUse => ({
                    data: new GetUseAppOutputDTO(
                        appUse.id.getValue(),
                        appUse.interval.getStartDate(),
                        appUse.interval.getEndDate(),
                        appUse.geoLocalization?.getLatitude(),
                        appUse.geoLocalization?.getLongitude(),
                    ),
                    interval_in_ms: appUse.interval.getIntervalInMs()
                }))
            }
        };
    }
}

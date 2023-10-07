import EndUseUseCase from '../../application/usecases/end-use';
import { Controller } from '../protocols/Controller';

type Input = {
    longitude: number,
    latitude: number,
    start_date: string,
    end_date: string
}

export default class CreateAppUseController implements Controller<Input, { message: string }> {
    constructor(
        private readonly endUse: EndUseUseCase
    ) {}

    async handle(input: Input) {
        console.log(input)
        try {
            await this.endUse.execute({
                longitude: input.longitude,
                latitude: input.latitude,
                endDate: input.end_date,
                startDate: input.start_date
            });

            return {
                statusCode: 201,
                body: {
                    message: 'register created with success'
                }
            };
        } catch(err: any) {
            return {
                statusCode: 400,
                body: {
                    message: err.message
                }
            };
        }

    }
}

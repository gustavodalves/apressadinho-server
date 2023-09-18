import EndUseUseCase from '../../../application/usecases/end-use';
import AppUseMongoRepository from '../../../infra/repositories/mongodb/AppUse';

export default class EndUseCaseFactory {
    generate() {
        return new EndUseUseCase(
            new AppUseMongoRepository()
        );
    }
}

import EndUseUseCase from '../../../application/usecases/end-use';
import AppUseMongoRepository from '../../../infra/repositories/mongodb/AppUse';
import CreateAppUseController from '../../../presentation/controllers/create-app-use';

export default class EndUseCaseControllerFactory {
    static generate() {
        const useCase = new EndUseUseCase(
            new AppUseMongoRepository()
        );
        return new CreateAppUseController(useCase);
    }
}

import GetAppUseController from '../../../presentation/controllers/get-app-use';
import ViewUseDailyCaseFactory from '../usecases/view-use-daily';

export default class GetAppUseControllerFactory {
    static generate() {
        const useCase = new ViewUseDailyCaseFactory().generate();

        return new GetAppUseController(useCase);
    }
}

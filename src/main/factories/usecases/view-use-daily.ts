import ViewUseDailyuseCase from '../../../application/usecases/view-use-daily';
import AppUseMongoRepository from '../../../infra/repositories/mongodb/AppUse';

export default class ViewUseDailyCaseFactory {
    generate() {
        return new ViewUseDailyuseCase(
            new AppUseMongoRepository()
        );
    }
}

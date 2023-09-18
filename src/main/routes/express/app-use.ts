import { Router } from 'express';
import { adaptRoute } from '../../adapters/adapt-route';
import EndUseCaseControllerFactory from '../../factories/controllers/end-use';
import GetAppUseControllerFactory from '../../factories/controllers/get-app-use';

export default class AppUseRouter {
    constructor(private readonly router: Router) {}

    init() {
        this.router.post('/app-use', adaptRoute(EndUseCaseControllerFactory.generate()));
        this.router.get('/app-use', adaptRoute(GetAppUseControllerFactory.generate()));

        return this.router;
    }
}

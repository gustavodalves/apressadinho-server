
import AppUseRouter from '../routes/express/app-use';

import { Router, Express } from 'express';

export default class RoutesConfig {
    private readonly router = Router();
    private readonly appUseExpressRouter: AppUseRouter = new AppUseRouter(this.router);

    constructor(private readonly app: Express, private routerPreName: string) {}

    init() {
        this.app.use(this.routerPreName, this.appUseExpressRouter.init());
    }
}

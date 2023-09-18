import { Controller } from '../../presentation/protocols/Controller';

import { Request, Response } from 'express';

export const adaptRoute = <T, K>(controller: Controller<T, K>) => async (req: Request, res: Response) => {
    const request = {
        ...(req.query || {}),
        ...(req.body || {}),
        ...(req.params || {}),
    };

    const httpResponse = await controller.handle(request);

    return res.status(httpResponse.statusCode).json(httpResponse.body);
};

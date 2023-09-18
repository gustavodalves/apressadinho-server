import express from 'express';

import MongoDB from '../infra/database/mongo/singleton/MongoDB';
import RoutesConfig from './config/routes';

const app = express();
app.use(express.json());

new RoutesConfig(app, '/api/v1').init();

app.listen(3000, async () => {
    const mongoDb = MongoDB;

    await mongoDb.connect();

    console.log('server running at port 3000');
});

import Env from '../../../config/Env';
import MongoConnect from '../connect';

export default new MongoConnect(Env.get('DATABASE_URL'));

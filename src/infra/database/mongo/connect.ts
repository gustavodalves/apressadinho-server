import mongoose from 'mongoose';
import DbConnection from '../connection';

export default class MongoDatabaseConnect implements DbConnection {
    constructor(private readonly url: string) {}

    async connect() {
        try {
            await mongoose.connect(this.url);
            console.log('MONGO DATABASE HAS BEEN CONNECTED');
        } catch(err: any) {
            console.log('MONGO DATABASE FAILED WHEN CONNECTED', err.message);
        }
    }

    async disconnect() {
        await mongoose.disconnect();
        console.log('MONGO DATABASE HAS BEEN DISCONNECTED');
    }
}

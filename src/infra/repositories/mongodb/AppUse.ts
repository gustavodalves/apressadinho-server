import AppUse from '../../../domain/entities/AppUse/AppUse';
import { AppUseGetByIdRepository, AppUseSaveRepository, AppUseGetByDateInterval } from '../../../domain/repositories/AppUse';

import AppUseModel from '../../database/mongo/models/AppUse';

export default class AppUseMongoRepository implements AppUseGetByIdRepository, AppUseSaveRepository, AppUseGetByDateInterval {
    async save(appUse: AppUse): Promise<void> {
        await AppUseModel.create({
            _id: appUse.id.getValue(),
            latitude: appUse.geoLocalization?.getLatitude(),
            longitude: appUse.geoLocalization?.getLongitude(),
            endDate: appUse.interval.getEndDate(),
            startDate: appUse.interval.getStartDate()
        });
    }

    async getById(id: string): Promise<AppUse> {
        const raw =await  AppUseModel.findById(id);

        if(!raw) throw new Error();

        const {
            longitude, latitude, _id: appUseId, startDate, endDate
        } = raw;

        if(!appUseId|| !startDate || !endDate) throw new Error();

        return AppUse.recover({
            id: appUseId,
            latitude: latitude,
            longitude: longitude,
            endDate: endDate.toISOString(),
            startDate: startDate.toISOString(),
        });
    }

    async getByDateInterval(startDate: Date, endDate: Date): Promise<AppUse[]> {
        const raw = await AppUseModel.find({
            startDate: { $lte: endDate },
            endDate: { $gte: endDate }
        });

        return raw.map(item => AppUse.recover({
            id: item.id,
            latitude: item.latitude,
            longitude: item.longitude,
            endDate: item.endDate!.toISOString(),
            startDate: item.startDate!.toISOString(),
        }))
    }
}

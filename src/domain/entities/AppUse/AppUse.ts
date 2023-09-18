import Id from '../value-objects/Id';
import GeoLocalization from './GeoLocalization';
import Interval from './Interval';

export default class AppUse {
    private constructor(
        public id: Id,
        public geoLocalization: GeoLocalization,
        public interval: Interval,
    ) {}

    static create(
        longitude: number,
        latitude: number,
        startDate: string,
        endDate: string
    ) {
        return new AppUse(
            Id.create(),
            new GeoLocalization(longitude, latitude),
            new Interval(
                new Date(startDate),
                new Date(endDate),
            )
        );
    }

    static recover(
        id: string,
        longitude: number,
        latitude: number,
        startDate: string,
        endDate: string
    ) {
        return new AppUse(
            Id.recover(id),
            new GeoLocalization(longitude, latitude),
            new Interval(
                new Date(startDate),
                new Date(endDate),
            )
        );
    }
}

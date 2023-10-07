import Id from '../value-objects/Id';
import GeoLocalization from './GeoLocalization';
import Interval from './Interval';

export type AppUseCreateCommand = {
    longitude?: number,
    latitude?: number,
    startDate: string,
    endDate: string
}

export type AppUseRecoverCommand = {
    longitude?: number,
    latitude?: number,
    startDate: string,
    endDate: string,
    id: string
}

export default class AppUse {
    private constructor(
        public id: Id,
        public interval: Interval,
        public geoLocalization?: GeoLocalization,
    ) {}

    static create(
        props: AppUseCreateCommand
    ) {
        let localization: GeoLocalization | undefined = undefined
        if(props.latitude && props.longitude) {
            localization = new GeoLocalization(props.longitude, props.latitude)
        }
        return new AppUse(
            Id.create(),
            new Interval(
                new Date(props.startDate),
                new Date(props.endDate),
            ),
            localization
        );
    }

    static recover(
        props: AppUseRecoverCommand
    ) {
        let localization: GeoLocalization | undefined = undefined
        if(props.latitude && props.longitude) {
            localization = new GeoLocalization(props.longitude, props.latitude)
        }
        return new AppUse(
            Id.recover(props.id),
            new Interval(
                new Date(props.startDate),
                new Date(props.endDate),
                ),
            localization,
        );
    }
}

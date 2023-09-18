export default class GeoLocalization {
    constructor(
        private readonly latitude: number,
        private readonly longitude: number
    ) {}

    getLatitude() {
        return this.latitude;
    }

    getLongitude() {
        return this.longitude;
    }
}

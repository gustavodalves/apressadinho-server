export default class GetUseAppOutputDTO {
    constructor(
        public id: string,
        public startDate: Date,
        public endDate: Date,
        public longitude?: number,
        public latitude?: number,
    ) {}

    toJSON() {
        return {
            id: this.id,
            start_date: this.startDate,
            end_date: this.endDate,
            longitude: this.longitude,
            latitude: this.latitude,
        };
    }
}

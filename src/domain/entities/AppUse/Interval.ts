export default class Interval {
    private readonly startDate: Date;
    private readonly endDate: Date;

    constructor(
        startDate: Date,
        endDate: Date,
    ) {
        if(startDate > new Date() || endDate > new Date()) throw new Error('Date ');
        if(startDate > endDate) throw new Error('start date ');

        this.startDate = startDate;
        this.endDate = endDate;
    }

    getStartDate() {
        return this.startDate;
    }

    getEndDate() {
        return this.endDate;
    }

    getIntervalInMs() {
        return this.endDate.getTime() - this.startDate.getTime();
    }

    getIntervalInMinutes() {
        return this.getIntervalInMs() / 1000;
    }
}

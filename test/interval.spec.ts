import Interval from '../src/domain/entities/AppUse/Interval';

describe('Interval', () => {
    it('shoud be able create interval', () => {
        const interval = new Interval(
            new Date(
                '2023-09-15T09:22:00.000-03:00'
            ),
            new Date(
                '2023-09-15T09:23:00.000-03:00'
            )
        );
        expect(interval).toBeInstanceOf(Interval);
    });

    it('shoud not be able create interval', () => {
        expect(() => new Interval(
            new Date(
                '2023-09-15T09:22:00.000-03:00'
            ),
            new Date(
                '2023-09-15T09:21:00.000-03:00'
            )
        )).toThrow();
    });

    it('Should be able get interval in minute', () => {
        const interval = new Interval(
            new Date(
                '2023-09-15T09:21:00.000-03:00'
            ),
            new Date(
                '2023-09-15T09:22:00.000-03:00'
            )
        );

        const minutes = interval.getIntervalInMinutes();
        expect(minutes).toBe(60);
    });
});

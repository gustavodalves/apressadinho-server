import ViewUseDailyuseCase from '../src/application/usecases/view-use-daily';
import AppUse from '../src/domain/entities/AppUse/AppUse';
import AppUseRepositoryMemory from './resources/repositories/fakes/AppUse';

const repository = new AppUseRepositoryMemory();

const input= {
    startDate: '2023-09-15T09:21:00.000-03:00',
    endDate: '2023-09-15T09:22:00.000-03:00'
};

const appUsesInput = {
    startDate: input.startDate,
    endDate: input.endDate,
    latitude: -20,
    longitude: -30
};

describe('View Uses Daily', () => {
    it('shoud be able view all daily in interval', async () => {
        //given
        const amountAppUses = 7;

        const createAppUses = Array.from({ length: amountAppUses - 1 }).map(() => AppUse.create(appUsesInput));
        const appUseDifferent = AppUse.create({
            startDate: '2023-09-15T09:23:00.000-03:00',
            endDate: '2023-09-15T09:23:10.000-03:00',
            latitude: 30,
            longitude: 12
        });

        createAppUses.push(appUseDifferent);

        for (const appUse of createAppUses) {
            await repository.save(appUse);
        }
        const viewUseDaily = new ViewUseDailyuseCase(repository);
        //when
        const appUses = await viewUseDaily.execute(input.startDate, input.endDate);
        //then
        expect(appUses.length).toBe(amountAppUses - 1);
    });
});

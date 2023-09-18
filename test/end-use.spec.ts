import EndUseUseCase from '../src/application/usecases/end-use';
import AppUseRepositoryMemory from './resources/repositories/fakes/AppUse';

describe('EndUse Use Case', () => {
    it('should be able create AppUse', async () => {
        const repository = new AppUseRepositoryMemory();
        const endUse = new EndUseUseCase(
            repository
        );

        const input = {
            latitude:  -46.6388,
            longitude: -23.5489,
            startDate: '2023-09-15T09:21:00.000-03:00',
            endDate: '2023-09-15T09:22:00.000-03:00'
        };

        await expect(endUse.execute(input)).resolves.not.toThrow();
    });
});

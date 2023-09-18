import api from './resources/api';

describe('Create End App Use', () => {
    it('should be able create end app', async () => {
        const request = api.post<{ message: string }>('/api/v1/app-use', {
            'longitude': 32,
            'latitude': 43,
            'start_date': '2023-09-15T13:09:00',
            'end_date': '2023-09-15T14:09:00'
        });

        await expect(request).resolves.not.toThrow();
    });
});

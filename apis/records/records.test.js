const { TestScheduler } = require('jest');
const request = require('supertest');
const server = require('../../app');


describe('Testing Records APIs', () => {
    describe('POST /v1/records', () => {
        const endpoint = '/v1/records';

        test('start date to be a date', async () => {
            const requestPayload = {
                'startDate': "2021-26-01",
                'endDate': "2021-01-26",
                'minCount': "100",
                'maxCount': "500"
            };

            const response = await request(server).post(endpoint).send(requestPayload);

            expect(response.body).toBeInstanceOf(Object);
            expect(response.body.code).toBe(4);
            expect(response.body.msg).toBe('Errors');
            expect(response.body.errors).toContain("Start date must be a valid date");
        });

        test('end date to be a date', async () => {
            const requestPayload = {
                "startDate": "2021-01-01",
                "endDate": "2021-26-26",
                "minCount": "100",
                "maxCount": "1000"
            };

            const response = await request(server).post(endpoint).send(requestPayload);

            expect(response.body).toBeInstanceOf(Object);
            expect(response.body.code).toBe(4);
            expect(response.body.msg).toBe('Errors');
            expect(response.body.errors).toContain("End date must be a valid date");
        });

        test('minimum count to be a number', async () => {
            const requestPayload = {
                "startDate": "2021-01-01",
                "endDate": "2021-01-26",
                "minCount": "sasasas",
                "maxCount": "100"
            };

            const response = await request(server).post(endpoint).send(requestPayload);

            expect(response.body).toBeInstanceOf(Object);
            expect(response.body.code).toBe(4);
            expect(response.body.msg).toBe('Errors');
            expect(response.body.errors).toContain("Minimum count must be a number");
        });

        test('maximum count to be a number', async () => {
            const requestPayload = {
                "startDate": "2021-01-01",
                "endDate": "2021-12-26",
                "minCount": "100",
                "maxCount": "dsdsdsds"
            };

            const response = await request(server).post(endpoint).send(requestPayload);

            expect(response.body).toBeInstanceOf(Object);
            expect(response.body.code).toBe(4);
            expect(response.body.msg).toBe('Errors');
            expect(response.body.errors).toContain("Maximum count must be a number");
        });

        test('if records are retrieved successfully', async () => {
            const requestPayload = {
                "startDate": "2021-01-01",
                "endDate": "2021-12-26",
                "minCount": "100",
                "maxCount": "1500"
            };

            const response = await request(server).post(endpoint).send(requestPayload);

            expect(response.body).toBeInstanceOf(Object);
            expect(response.body.code).toBe(0);
            expect(response.body.msg).toBe('Success');
            expect(response.body.records).toBeInstanceOf(Array);
        });
    });
});

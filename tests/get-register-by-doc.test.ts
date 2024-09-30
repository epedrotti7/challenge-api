import request from 'supertest';
import app from '../src/app';
import { PrismaClient } from '@prisma/client';

jest.mock('@prisma/client', () => {
    const mPrismaClient = {
        register: {
            findFirst: jest.fn(),
        },
    };
    return { PrismaClient: jest.fn(() => mPrismaClient) };
});

describe('GET /register', () => {
    let prismaMock: any;

    beforeEach(() => {
        prismaMock = new PrismaClient();
    });

    it('should return 200 and the register when found', async () => {
        const mockRegister = {
            id: 1,
            physicsPerson: true,
            juridicPerson: true,
            cnpj: '947598745',
            cpf: '12345678901',
            name: 'John Doe',
            fone: '8974539845',
            cellphone: '734973895',
            email: 'john.doe@example.com',
            repeatEmail: 'john.doe@example.com',
            cep: '875438743',
            street: 'Main St',
            number: 123,
            complement: 'Apt 4',
            city: 'Sample City',
            neighborhood: 'Sample Neighborhood',
            state: 'RS',
            acceptedTerms: true,
            createdAt: new Date(),
            updatedAt: new Date(),
        };

        // Mockando o retorno do método findFirst do Prisma
        prismaMock.register.findFirst.mockResolvedValue(mockRegister);

        const response = await request(app).get('/api/v1/register?cpf=12345678901');

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({
            ...mockRegister,
            createdAt: mockRegister.createdAt.toISOString(),
            updatedAt: mockRegister.updatedAt.toISOString(),
        });
    });

    it('should return 404 if register not found', async () => {
        prismaMock.register.findFirst.mockResolvedValue(null);

        const response = await request(app).get('/api/v1/register?cpf=11111111111');

        expect(response.statusCode).toBe(404);
        expect(response.body.message).toBe('Register not found');
    });
});
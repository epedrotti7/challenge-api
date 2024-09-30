import request from 'supertest';
import { registerQueue } from '../src/queue/queue';
import app from '../src/app';

jest.mock('../src/queue/queue', () => ({
    registerQueue: {
        add: jest.fn(),
    },
}));

describe('POST /register', () => {
    it('should add register to the queue and return 201', async () => {
        const mockRegister = {
            physicsPerson: true,
            juridicPerson: true,
            cnpj: "947598745",
            cpf: "967497534983",
            name: "eliton",
            fone: "8974539845",
            cellphone: "734973895",
            email: "eliton@mail.com",
            repeatEmail: "eliton@gmail.com",
            address: {
                cep: "875438743",
                street: "947598375893",
                number: 54353,
                complement: "casa",
                city: "poa",
                neighborhood: "azenha",
                state: "RS",
            },
            acceptedTerms: true,
        };

        const response = await request(app)
            .post('/api/v1/register')
            .send(mockRegister);

        expect(response.status).toBe(201);
        expect(response.body.message).toBe('Register added to the queue for processing.');
        expect(registerQueue.add).toHaveBeenCalledWith({ data: mockRegister });
    });

    it('should return 400 if "fone" is missing', async () => {
        const invalidRegister = {
            physicsPerson: true,
            juridicPerson: true,
            cnpj: "947598745",
            cpf: "967497534983",
            name: "eliton",
            cellphone: "734973895",
            email: "eliton@mail.com",
            repeatEmail: "eliton@gmail.com",
            address: {
                cep: "875438743",
                street: "947598375893",
                number: 54353,
                complement: "casa",
                city: "poa",
                neighborhood: "azenha",
                state: "RS",
            },
            acceptedTerms: true,
        };

        const response = await request(app)
            .post('/api/v1/register')
            .send(invalidRegister);

        expect(response.status).toBe(400);
        expect(response.body.message).toBe('"fone" is required');
    });
});
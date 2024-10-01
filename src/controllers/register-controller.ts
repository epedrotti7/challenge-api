import { Request, Response } from 'express';
import { RegisterService } from '../services/register-service';
import { registerSchema } from '../utils/register-validator';
import { registerQueue } from '../queue/queue';

export class RegisterController {
    private registerService: RegisterService;

    constructor() {
        this.registerService = new RegisterService();
    }

    public createRegister = async (req: Request, res: Response): Promise<void> => {
        try {
            const { error } = registerSchema.validate(req.body);
            if (error) {
                res.status(400).send({ message: error.details[0].message });
                return;
            }

            await registerQueue.add({ data: req.body });

            res.status(201).send({ message: 'Register added to the queue for processing.' });
        } catch (error) {
            res.status(500).send({ message: 'An error occurred while processing the request.' });
        }
    };

    public getRegisterByDoc = async (req: Request, res: Response): Promise<void> => {
        try {
            const doc = req.query.cpf || req.query.cnpj;
            const register = await this.registerService.getByDoc(doc as string);
            if (register) {
                res.status(200).send(register);
            } else {
                res.status(404).send({ message: 'Register not found' });
            }
        } catch (error) {
            console.error('Error in getRegisterByDoc:', error);
            res.status(500).send({ message: 'An error occurred while retrieving the register.' });
        }
    };

}
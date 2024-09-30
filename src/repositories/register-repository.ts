import { PrismaClient } from '@prisma/client';
import { Register } from '../models/register';
const prisma = new PrismaClient();

export class RegisterRepository {
    public create = async (data: Register) => {
        return prisma.register.create({
            data: {
                physicsPerson: data.physicsPerson,
                juridicPerson: data.juridicPerson,
                cnpj: data.cnpj,
                cpf: data.cpf,
                name: data.name,
                fone: data.fone,
                cellphone: data.cellphone,
                email: data.email,
                repeatEmail: data.repeatEmail,
                cep: data.address.cep,
                street: data.address.street,
                number: data.address.number,
                complement: data.address.complement,
                city: data.address.city,
                neighborhood: data.address.neighborhood,
                state: data.address.state,
                acceptedTerms: data.acceptedTerms,
            }
        });
    };

    public findByDoc = async (doc: string) => {
        return prisma.register.findFirst({
            where: {
                OR: [
                    { cpf: doc },
                    { cnpj: doc }
                ]
            }
        });
    };
}
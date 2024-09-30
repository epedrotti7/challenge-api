
export type Register = {
    physicsPerson: boolean,
    juridicPerson: boolean,
    cnpj: string,
    cpf: string,
    name: string,
    fone: string,
    cellphone: string,
    email: string,
    repeatEmail: string,
    address: {
        cep: string,
        street: string,
        number: number,
        complement: string,
        city: string,
        neighborhood: string,
        state: string
    },
    acceptedTerms: true
}
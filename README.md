## Backend Challenge

O projeto foi desenvolvido utilizando Nodejs v20 com Typescript, juntamente com Expressjs de servidor, 
MySQL para persistencia dos dados juntamente com o ORM Prisma, BullJS para fila utilizando Redis, Joi para validação de input,
Docker para conteinerização, Jest para testes unitários e Swagger para documentacao.

## Link das tecnologias utilizadas

- **Nodejs 20**: [https://nodejs.org/en]
- **Expressjs**: [https://expressjs.com/pt-br/] 
- **Prisma**: [https://www.prisma.io/]
- **MySQL**: [https://www.mysql.com/]
- **Docker**: [https://www.docker.com/] 
- **Bulljs**: [https://github.com/OptimalBits/bull] 
- **Jest**: [https://jestjs.io/pt-BR/]

## Iniciar a API

Pra executar a API basta ter o Docker instalado

Entao rodar o comando:

docker-compose up -d

A imagem será criada, as dependencias instaladas, o banco ficará disponivel, o build será criado e a API será executada

assim que as imagens estiverem up, podemos acessar  swagger da API

http://localhost:3000/api-docs/#/

Exemplo de request para o endpoint POST

```
{
    "physicsPerson": true,
    "juridicPerson": true,
    "cnpj": "947598745",
    "cpf": "967497534983",
    "name": "eliton",
    "fone": "8974539845",
    "cellphone": "734973895",
    "email": "eliton@mail.com",
    "repeatEmail": "eliton@gmail.com",
    "address": {
        "cep": "875438743",
        "street": "947598375893",
        "number": 54353,
        "complement": "casa",
        "city": "poa",
        "neighborhood": "azenha",
        "state": "RS"
    },
    "acceptedTerms": true
}
```

As demais requests GET o proprio swagger terá as informações.

Para conferir os dados do banco, basta usar um client e conectar usando as credenciais de desenvolvimento.

## Rodar testes

Para rodar os testes, é necessário fazer isso localmente sem o uso de imagem docker, basta ter o Nodejs 20 instalado

Rodar o comando

```
npm i
```
Para instalar as dependencias e entao

```
npm run test
```


## Descriçao

Payment Service Provider (PSP)

### Tecnologias utilizadas

[NestJS](https://nestjs.com/) <br/>
[Swagger](https://swagger.io/) <br/>
[TypeScript](https://www.typescriptlang.org/) <br/>
[Prisma](https://www.prisma.io/) <br/>
[Docker](https://www.docker.com/) <br/>
[PostgreSQL](https://docs.airplane.dev/resources/postgresql?gclid=Cj0KCQiA0oagBhDHARIsAI-BbgeGKGaq9ISihc3kG6cH6DgVatfxH4L20J0eyFGJgfu6-F0bDSHpOLAaAgu9EALw_wcB)

## Requisitos para rodar a aplicaçao

Instalar o Docker para o banco de dados

A documentaçao abaixo mostra como fazer a instalaçao <br/>
[Docker Engine](https://docs.docker.com/engine/)

Instalar o NodeJS <br/>
[NodeJS](https://nodejs.org/en/)

## Iniciando a aplicação

Clone a aplicaçao extraia e entre na pasta extraida

Instale as dependencias

```bash
$ yarn install
```

ou

```bash
$ npm install
```

### Iniciando o container

Execute o comando abaixo para iniciar o container.

```bash
$ yarn db:dev:restart
```

ou

```bash
$ npm run db:dev:restart
```

Feito isso o container sera inicializado, realizando as migraçoes e seedings

## Iniciando a aplicaçao Nestjs

```bash
$ yarn run start
```

ou

```bash
$ npm run start
```

A aplicaçao estara funcionando na porta 3000 <br/>
-PORTA = 3000 <br/>
-IP = http://localhost:3000

Observaçao: O serviço de pagamento dos pagaveis esta programado para ser executado a cada 45 segundos apos a aplicaçao iniciar

### Rotas da aplicaçao

#### Transaçoes

```
GET
/transactions

retorna todas as transaçoes
```

```
GET
/get-transaction-by-id/{id}

Exemplo:
/get-transaction-by-id/1

```

```
POST
/create-transaction

Request Body:
{
  "value": 0,
  "descriptions": "string",
  "cardNumber": "string",
  "cardNameHolder": "string",
  "cardExpirationDate": "string",
  "cardVerificationCode": "string"
}
```

#### Pagaveis

```
GET
/payables

retorna todos os pagaveis
```

```
GET
/get-payable-by-id/{id}

Exemplo:
get-payable-by-id/1
```

#### Saldos

```
GET
/balance-paid

Retorna todos os valores pagos
```

```

GET
/balance-pending

Retorna todos os valores pendentes

```

### Documentaçao com Swagger

Para visualizar basta acessar o endereço /api <br/>
-IP = http://localhost:3000/api

## Testes

```bash
# testes unitarios
$ yarn run test

ou

$ npm run test

```

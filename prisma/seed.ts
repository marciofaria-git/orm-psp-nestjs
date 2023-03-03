import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const transactionsData = [
  {
    id: 1,
    value: 100,
    descriptions: 'smart band',
    cardNumber: '222-222-222-222',
    cardNameHolder: 'Marcio Mateus Faria De Souza',
    cardExpirationDate: '122025',
    cardVerificationCode: '123',
    createdAt: new Date('2022-11-17T03:24:00'),
  },
  {
    id: 2,
    value: 50,
    descriptions: 'camisa polo',
    cardNumber: '111-111-111-111',
    cardNameHolder: 'Antonio Rodrigues Carlo',
    cardExpirationDate: '112024',
    cardVerificationCode: '231',
    createdAt: new Date('2022-10-10T03:24:00'),
  },
  {
    id: 3,
    value: 150,
    descriptions: 'consulta medica',
    cardNumber: '333-111-121-412',
    cardNameHolder: 'Sara Fagundes Quinoa',
    cardExpirationDate: '052026',
    cardVerificationCode: '972',
    createdAt: new Date('2022-12-29T03:24:00'),
  },
  {
    id: 4,
    value: 70,
    descriptions: 'mouse sem fio',
    cardNumber: '222-312-221-789',
    cardNameHolder: 'Joao Souza',
    cardExpirationDate: '042024',
    cardVerificationCode: '268',
    createdAt: new Date('2022-04-02T03:24:00'),
  },
  {
    id: 5,
    value: 357.52,
    descriptions: 'Pneu aro 14 fire',
    cardNumber: '222-121-331-261',
    cardNameHolder: 'Rogerio Marcos Soares',
    cardExpirationDate: '052028',
    cardVerificationCode: '148',
    createdAt: new Date('2022-03-12T03:24:00'),
  },
];

const payableDate = [];

const createPayable = () => {
  for (const transaction of transactionsData) {
    const paymentDate = new Date(transaction.createdAt);

    paymentDate.setDate(paymentDate.getDate() + 30);

    const taxCalculate = (value: number, fee: number) => {
      return value - value * (fee / 100);
    };

    payableDate.push({
      status: 'pending',
      paymentDate: paymentDate,
      liquidValue: taxCalculate(transaction.value, 5),
      transactionId: transaction.id,
    });
  }
};

createPayable();

console.log(payableDate);

async function main() {
  for (const transaction of transactionsData) {
    await prisma.transaction.create({
      data: {
        value: transaction.value,
        descriptions: transaction.descriptions,
        cardNumber: transaction.cardNumber,
        cardNameHolder: transaction.cardNameHolder,
        cardExpirationDate: transaction.cardExpirationDate,
        cardVerificationCode: transaction.cardVerificationCode,
        createdAt: transaction.createdAt,
      },
    });
  }

  for (const payable of payableDate) {
    await prisma.payable.create({
      data: {
        liquidValue: payable.liquidValue,
        paymentDate: payable.paymentDate,
        status: payable.status,
        transactionId: payable.transactionId,
      },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

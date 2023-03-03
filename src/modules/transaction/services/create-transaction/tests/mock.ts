export const mockCreateTransactionReturnValue = {
  id: 1,
  value: 100,
  descriptions: 'smart band',
  cardNumber: '222-222-222-222',
  cardNameHolder: 'Marcio Mateus Faria De Souza',
  cardExpirationDate: '122025',
  cardVerificationCode: '123',
  createdAt: new Date('2022-11-17T03:24:00'),
};

export const mockCreatePayableReturnValue = {
  id: 1,
  createdAt: '2023-03-03T17:25:02.078Z',
  updatedAt: '2023-03-03T17:25:10.047Z',
  status: 'finished',
  paymentDate: new Date('2022-12-17T06:24:00.000Z'),
  liquidValue: 95,
  transactionId: 1,
};

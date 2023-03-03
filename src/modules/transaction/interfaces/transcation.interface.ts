export interface ITransaction {
  id: number;
  value: number;
  descriptions: string;
  cardNumber: string;
  cardNameHolder: string;
  cardExpirationDate: string;
  cardVerificationCode: string;
  createdAt: Date;
}

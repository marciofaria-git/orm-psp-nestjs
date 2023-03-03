import { Test, TestingModule } from '@nestjs/testing';
import { PayableRepository } from '../../../../../../src/modules/payable/repository/PayableRepository';
import { TransactionRepostitory } from '../../../../../../src/modules/transaction/repository/TransactionRepository';
import { CreateTransactionService } from '../CreateTransaction.service';
import {
  mockCreatePayableReturnValue,
  mockCreateTransactionReturnValue,
} from './mock';

describe('CreateTransactionService', () => {
  let createTransactionService: CreateTransactionService;
  let transactionRepository: TransactionRepostitory;
  let payableRepository: PayableRepository;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [
        CreateTransactionService,
        {
          provide: TransactionRepostitory,
          useValue: {
            createTransaction: jest
              .fn()
              .mockReturnValue(mockCreateTransactionReturnValue),
            getTransactionById: jest.fn().mockReturnValue(undefined),
          },
        },
        {
          provide: PayableRepository,
          useValue: {
            createPayable: jest
              .fn()
              .mockResolvedValue(mockCreatePayableReturnValue),
          },
        },
      ],
    }).compile();

    createTransactionService = moduleRef.get<CreateTransactionService>(
      CreateTransactionService,
    );
    transactionRepository = moduleRef.get<TransactionRepostitory>(
      TransactionRepostitory,
    );
    payableRepository = moduleRef.get<PayableRepository>(PayableRepository);
  });

  it('Should be defined', () => {
    expect(createTransactionService).toBeDefined();
    expect(transactionRepository).toBeDefined();
    expect(payableRepository).toBeDefined();
  });

  it('Should create a transaction', async () => {
    const response = await createTransactionService.createTransaction(
      mockCreateTransactionReturnValue,
    );

    expect(transactionRepository.createTransaction).toHaveBeenCalledTimes(1);

    expect(response).toEqual(mockCreateTransactionReturnValue);
  });
});

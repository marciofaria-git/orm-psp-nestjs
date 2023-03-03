import { Test, TestingModule } from '@nestjs/testing';
import { TransactionRepostitory } from '../../../repository/TransactionRepository';
import { GetTransactionByIdService } from '../GetTransactionById.service';
import { mockGetTransactionByIdReturnValue } from './mock';

describe('GetTransactionByIdService ', () => {
  let transactionRepository: TransactionRepostitory;
  let getTransactionByIdService: GetTransactionByIdService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [
        GetTransactionByIdService,
        {
          provide: TransactionRepostitory,
          useValue: {
            getTransactionById: jest
              .fn()
              .mockReturnValue(mockGetTransactionByIdReturnValue),
          },
        },
      ],
    }).compile();

    getTransactionByIdService = moduleRef.get<GetTransactionByIdService>(
      GetTransactionByIdService,
    );

    transactionRepository = moduleRef.get<TransactionRepostitory>(
      TransactionRepostitory,
    );
  });

  it('Should be defined', () => {
    expect(getTransactionByIdService).toBeDefined();
    expect(transactionRepository).toBeDefined();
  });

  it('Should return a transaction by id', async () => {
    const id = 1;

    const getTransactionSpy = jest
      .spyOn(transactionRepository, 'getTransactionById')
      .mockResolvedValue(mockGetTransactionByIdReturnValue);

    const response = await getTransactionByIdService.getTransactionById(id);

    expect(getTransactionSpy).toHaveBeenCalledTimes(1);
    expect(getTransactionSpy).toBeCalledWith(id);

    expect(response).toEqual(mockGetTransactionByIdReturnValue);
  });
});

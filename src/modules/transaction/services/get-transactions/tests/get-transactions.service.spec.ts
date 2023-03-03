import { Test } from '@nestjs/testing';
import { GetTransactionsController } from '../GetTransactions.controller';
import { GetTransactionsService } from '../GetTransactions.service';
import { mockGetTransactionsReturnValue } from './mock';

describe('GetTransactionsService', () => {
  let getTransactionsController: GetTransactionsController;
  let getTransactionsService: GetTransactionsService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [GetTransactionsController],
      providers: [
        {
          provide: GetTransactionsService,
          useValue: {
            getTransactions: jest
              .fn()
              .mockReturnValue(mockGetTransactionsReturnValue),
          },
        },
      ],
    }).compile();

    getTransactionsService = moduleRef.get<GetTransactionsService>(
      GetTransactionsService,
    );

    getTransactionsController = moduleRef.get<GetTransactionsController>(
      GetTransactionsController,
    );
  });

  it('should be defined', () => {
    expect(getTransactionsController).toBeDefined();
    expect(getTransactionsService).toBeDefined();
  });

  it('should return all transactions', async () => {
    const response = await getTransactionsController.getTransactions();

    expect(getTransactionsService.getTransactions).toHaveBeenCalledTimes(1);
    expect(response).toBe(mockGetTransactionsReturnValue);
  });
});

import { TestingModule, Test } from '@nestjs/testing';
import { BalanceRepository } from '../../../repository/BalanceRepository';
import { BalancePendingService } from '../BalancePending.service';
import {
  mockBlancePendingResolveValue,
  mockBlancePendingReturnValue,
} from './mock';

describe('BalancePendingService ', () => {
  let balanceRepository: BalanceRepository;
  let balancePendingService: BalancePendingService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [
        BalancePendingService,
        {
          provide: BalanceRepository,
          useValue: {
            getBalancePending: jest
              .fn()
              .mockResolvedValue(mockBlancePendingResolveValue),
          },
        },
      ],
    }).compile();

    balancePendingService = moduleRef.get<BalancePendingService>(
      BalancePendingService,
    );

    balanceRepository = moduleRef.get<BalanceRepository>(BalanceRepository);
  });

  it('Should be defined', () => {
    expect(balancePendingService).toBeDefined();
    expect(balanceRepository).toBeDefined();
  });

  it('Should return a balance pending', async () => {
    const response = await balancePendingService.getBalancePending();

    const balanceFinished = jest
      .spyOn(balanceRepository, 'getBalancePending')
      .mockResolvedValue(mockBlancePendingReturnValue);
    expect(balanceFinished).toHaveBeenCalledTimes(1);
    expect(response).toEqual(mockBlancePendingReturnValue);
  });
});

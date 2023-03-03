import { TestingModule, Test } from '@nestjs/testing';
import { BalanceRepository } from '../../../repository/BalanceRepository';
import { BalancePaidService } from '../BalancePaid.service';

import {
  mockBlanceFinishedResolveValue,
  mockBlanceFinishedReturnValue,
} from './mock';

describe('BalanceFinishedService ', () => {
  let balanceRepository: BalanceRepository;
  let balanceFinishedService: BalancePaidService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [
        BalancePaidService,
        {
          provide: BalanceRepository,
          useValue: {
            getBalancePaid: jest
              .fn()
              .mockResolvedValue(mockBlanceFinishedResolveValue),
          },
        },
      ],
    }).compile();

    balanceFinishedService =
      moduleRef.get<BalancePaidService>(BalancePaidService);

    balanceRepository = moduleRef.get<BalanceRepository>(BalanceRepository);
  });

  it('Should be defined', () => {
    expect(balanceFinishedService).toBeDefined();
    expect(balanceRepository).toBeDefined();
  });

  it('Should return a balance finished', async () => {
    const response = await balanceFinishedService.getBalanceAvailable();

    const balanceFinished = jest
      .spyOn(balanceRepository, 'getBalancePaid')
      .mockResolvedValue(mockBlanceFinishedReturnValue);
    expect(balanceFinished).toHaveBeenCalledTimes(1);
    expect(response).toEqual(mockBlanceFinishedReturnValue);
  });
});

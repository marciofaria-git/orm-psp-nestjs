import { TestingModule, Test } from '@nestjs/testing';
import { BalanceRepository } from '../../../../../../src/modules/balance/repository/BalanceRepository';
import { BalanceFinishedService } from '../BalanceFinished.service';
import {
  mockBlanceFinishedResolveValue,
  mockBlanceFinishedReturnValue,
} from './mock';

describe('BalanceFinishedService ', () => {
  let balanceRepository: BalanceRepository;
  let balanceFinishedService: BalanceFinishedService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [
        BalanceFinishedService,
        {
          provide: BalanceRepository,
          useValue: {
            getBalanceFinished: jest
              .fn()
              .mockResolvedValue(mockBlanceFinishedResolveValue),
          },
        },
      ],
    }).compile();

    balanceFinishedService = moduleRef.get<BalanceFinishedService>(
      BalanceFinishedService,
    );

    balanceRepository = moduleRef.get<BalanceRepository>(BalanceRepository);
  });

  it('Should be defined', () => {
    expect(balanceFinishedService).toBeDefined();
    expect(balanceRepository).toBeDefined();
  });

  it('Should return a balance finished', async () => {
    const response = await balanceFinishedService.getBalanceAvailable();

    const balanceFinished = jest
      .spyOn(balanceRepository, 'getBalanceFinished')
      .mockResolvedValue(mockBlanceFinishedReturnValue);
    expect(balanceFinished).toHaveBeenCalledTimes(1);
    expect(response).toEqual(mockBlanceFinishedReturnValue);
  });
});

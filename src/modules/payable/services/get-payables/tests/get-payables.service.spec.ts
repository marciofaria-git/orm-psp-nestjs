import { TestingModule, Test } from '@nestjs/testing';
import { PayableRepository } from '../../../repository/PayableRepository';
import { GetPayablesService } from '../GetPayables.service';
import { mockGetPayablesReturnValue } from './mock';

describe('GetPayablesService', () => {
  let payableRepository: PayableRepository;
  let getPayablesService: GetPayablesService;
  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [
        GetPayablesService,
        {
          provide: PayableRepository,
          useValue: {
            getPayables: jest.fn().mockReturnValue(mockGetPayablesReturnValue),
          },
        },
      ],
    }).compile();

    getPayablesService = moduleRef.get<GetPayablesService>(GetPayablesService);

    payableRepository = moduleRef.get<PayableRepository>(PayableRepository);
  });
  it('Should be defined', () => {
    expect(getPayablesService).toBeDefined();
    expect(payableRepository).toBeDefined();
  });

  it('should return all payables', async () => {
    const response = await payableRepository.getPayables();

    expect(payableRepository.getPayables).toHaveBeenCalledTimes(1);
    expect(response).toBe(mockGetPayablesReturnValue);
  });
});

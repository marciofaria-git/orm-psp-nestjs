import { Test, TestingModule } from '@nestjs/testing';
import { mockCreatePayableReturnValue } from '../../../../../../src/modules/transaction/services/create-transaction/tests/mock';
import { PayableRepository } from '../../../../../../src/modules/payable/repository/PayableRepository';
import { CreatePayableService } from '../CreatePayable.service';

describe('CreatePayableService', () => {
  let payableRepository: PayableRepository;
  let createPayableService: CreatePayableService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [
        CreatePayableService,
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

    payableRepository = moduleRef.get<PayableRepository>(PayableRepository);

    createPayableService =
      moduleRef.get<CreatePayableService>(CreatePayableService);
  });

  it('Should be defined', () => {
    expect(payableRepository).toBeDefined();
    expect(createPayableService).toBeDefined();
  });

  it('Should create a payable', async () => {
    const transactionId = 1;
    const responseCreatePayable = await createPayableService.createPayable(
      transactionId,
      mockCreatePayableReturnValue,
    );

    expect(payableRepository.createPayable).toHaveBeenCalledTimes(1);

    expect(responseCreatePayable).toEqual(mockCreatePayableReturnValue);
  });
});

import { TestingModule, Test } from '@nestjs/testing';
import { PayableRepository } from '../../../../../../src/modules/payable/repository/PayableRepository';
import { GetPayableByIdService } from '../GetPayableById.service';
import { mockGetPayableByIdReturnValue } from './mock';

describe('GetTransactionByIdService ', () => {
  let payableRepository: PayableRepository;
  let getPayableByIdService: GetPayableByIdService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [
        GetPayableByIdService,
        {
          provide: PayableRepository,
          useValue: {
            getPayableById: jest
              .fn()
              .mockReturnValue(mockGetPayableByIdReturnValue),
          },
        },
      ],
    }).compile();

    getPayableByIdService = moduleRef.get<GetPayableByIdService>(
      GetPayableByIdService,
    );

    payableRepository = moduleRef.get<PayableRepository>(PayableRepository);
  });

  it('Should be defined', () => {
    expect(getPayableByIdService).toBeDefined();
    expect(payableRepository).toBeDefined();
  });

  it('Should return a payable by id', async () => {
    const id = 1;

    const getPayableById = jest
      .spyOn(payableRepository, 'getPayableById')
      .mockResolvedValue(mockGetPayableByIdReturnValue);

    const response = await getPayableByIdService.getPayableById(id);

    expect(getPayableById).toHaveBeenCalledTimes(1);
    expect(getPayableById).toBeCalledWith(id);

    expect(response).toEqual(mockGetPayableByIdReturnValue);
  });
});

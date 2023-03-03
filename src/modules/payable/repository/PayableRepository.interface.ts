import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePaybleDto } from '../dto/create-payable.dto';
import { IPayable } from '../interfaces/payable.interface';

export interface IPayableRepository {
  readonly prisma: PrismaService;

  getPayables(): Promise<IPayable[]>;

  getPayableById(id: number): Promise<IPayable>;

  createPayable(
    transId: number,
    createPayableDto: CreatePaybleDto,
  ): Promise<IPayable>;
}

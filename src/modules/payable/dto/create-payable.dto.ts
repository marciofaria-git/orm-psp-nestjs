import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsDate, IsNumber } from 'class-validator';

export class CreatePaybleDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  status: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  paymentDate: Date;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  liquidValue: number;
}

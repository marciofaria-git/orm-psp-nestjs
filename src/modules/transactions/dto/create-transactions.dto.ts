import { ApiProperty } from '@nestjs/swagger';
import {
  IsCreditCard,
  IsDateString,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class CreateTransactionsDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  value: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  descriptions: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @IsCreditCard()
  cardNumber: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  cardNameHolder: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @IsDateString()
  cardExpirationDate: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  cardVerificationCode: string;
}

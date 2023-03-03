import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import {
  IsCreditCard,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateTransactionsDto {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  value: number;

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

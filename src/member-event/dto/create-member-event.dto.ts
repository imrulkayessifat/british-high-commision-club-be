import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { MemberGuest } from '@prisma/client';

export class CreateMemberEventDto {
  @IsString()
  @IsNotEmpty()
  Title: string;

  @IsNumber()
  @IsNotEmpty()
  MemberInfoID: number;

  @IsString()
  @IsNotEmpty()
  Date: string;

  @IsNumber()
  @IsNotEmpty()
  TotalGuestCount: number;

  @IsNumber()
  @IsNotEmpty()
  PresentGuestCount: number;

  @IsString()
  @IsNotEmpty()
  StartTime: string;

  @IsString()
  @IsNotEmpty()
  EndTime: string;

  @IsNumber()
  @IsNotEmpty()
  EventDuration: number;

  @IsString()
  @IsNotEmpty()
  Summary: string;

  @IsArray()
  @IsOptional()
  MemberGuest?: MemberGuest[];
}

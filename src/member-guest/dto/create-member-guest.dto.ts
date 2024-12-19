import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateMemberGuestDto {
  @IsNumber()
  @IsNotEmpty()
  MemberVisitID: number;

  @IsString()
  @IsNotEmpty()
  FullName: string;

  @IsString()
  @IsNotEmpty()
  PhoneNo: string;

  @IsString()
  @IsNotEmpty()
  Rfid: string;
}

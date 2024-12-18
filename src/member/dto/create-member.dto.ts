import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export enum PriorityType {
  HIGH = 'HIGH',
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
}

export enum StatusType {
  ACTIVE = 'ACTIVE',
  ONHOLD = 'ONHOLD',
  CLOSED = 'CLOSED',
}

export enum GenderType {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  OTHERS = 'OTHERS',
}

export class CreateMemberDto {
  @IsString()
  @IsNotEmpty()
  MemberID: string;

  @IsString()
  @IsNotEmpty()
  FullName: string;

  @IsString()
  @IsNotEmpty()
  PhoneNo: string;

  @IsEmail()
  @IsNotEmpty()
  Email: string;

  @IsString()
  @IsOptional()
  PresentAddress?: string;

  @IsString()
  @IsOptional()
  PermanentAddress?: string;

  @IsString()
  @IsNotEmpty()
  Country: string;

  @IsString()
  @IsOptional()
  Profession?: string;

  @IsEnum(PriorityType)
  @IsNotEmpty()
  Priority: PriorityType;

  @IsEnum(GenderType)
  @IsNotEmpty()
  Gender: GenderType;

  @IsEnum(StatusType)
  @IsOptional()
  Status?: StatusType;

  @IsString()
  Rfid: string;

  @IsOptional()
  MaxGuestAllow?: number;
}

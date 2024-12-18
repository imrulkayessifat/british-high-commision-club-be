import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateMemberVisitDto {
  @IsNumber()
  @IsNotEmpty()
  MemberInfoID: number;
}

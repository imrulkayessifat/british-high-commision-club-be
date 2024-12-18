import { PartialType } from '@nestjs/mapped-types';
import { CreateMemberVisitDto } from './create-member-visit.dto';

export class UpdateMemberVisitDto extends PartialType(CreateMemberVisitDto) {}

import { PartialType } from '@nestjs/mapped-types';
import { CreateMemberGuestDto } from './create-member-guest.dto';

export class UpdateMemberGuestDto extends PartialType(CreateMemberGuestDto) {}

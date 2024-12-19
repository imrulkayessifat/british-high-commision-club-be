import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { MemberGuestService } from './member-guest.service';
import { CreateMemberGuestDto } from './dto/create-member-guest.dto';
import { UpdateMemberGuestDto } from './dto/update-member-guest.dto';

@Controller('member-guest')
export class MemberGuestController {
  constructor(private readonly memberGuestService: MemberGuestService) {}

  @Post()
  create(@Body() createMemberGuestDto: CreateMemberGuestDto) {
    return this.memberGuestService.create(createMemberGuestDto);
  }

  @Get()
  findAll(
    @Query('memberVisitId', new ParseIntPipe({ optional: true }))
    memberVisitId?: number,
  ) {
    return this.memberGuestService.findAll(memberVisitId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.memberGuestService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMemberGuestDto: UpdateMemberGuestDto,
  ) {
    return this.memberGuestService.update(+id, updateMemberGuestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.memberGuestService.remove(+id);
  }
}

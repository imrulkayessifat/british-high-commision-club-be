import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MemberVisitService } from './member-visit.service';
import { CreateMemberVisitDto } from './dto/create-member-visit.dto';
import { UpdateMemberVisitDto } from './dto/update-member-visit.dto';

@Controller('member-visit')
export class MemberVisitController {
  constructor(private readonly memberVisitService: MemberVisitService) {}

  @Post()
  create(@Body() createMemberVisitDto: CreateMemberVisitDto) {
    return this.memberVisitService.create(createMemberVisitDto);
  }

  @Get()
  findAll() {
    return this.memberVisitService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.memberVisitService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMemberVisitDto: UpdateMemberVisitDto,
  ) {
    return this.memberVisitService.update(+id, updateMemberVisitDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.memberVisitService.remove(+id);
  }
}

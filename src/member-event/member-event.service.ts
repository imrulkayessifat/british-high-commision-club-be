import { Injectable } from '@nestjs/common';
import { CreateMemberEventDto } from './dto/create-member-event.dto';
import { UpdateMemberEventDto } from './dto/update-member-event.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class MemberEventService {
  constructor(private prisma: PrismaService) {}

  async create(createMemberEventDto: CreateMemberEventDto) {
    const memberEventData: Prisma.MemberEventCreateInput = {
      Title: createMemberEventDto.Title,
      Date: createMemberEventDto.Date,
      TotalGuestCount: createMemberEventDto.TotalGuestCount,
      PresentGuestCount: createMemberEventDto.PresentGuestCount,
      StartTime: createMemberEventDto.StartTime,
      EndTime: createMemberEventDto.EndTime,
      EventDuration: createMemberEventDto.EventDuration,
      Summary: createMemberEventDto.Summary,
      Member: {
        connect: {
          id: createMemberEventDto.MemberInfoID,
        },
      },
      // Only include MemberGuest if it exists in the DTO
      ...(createMemberEventDto.MemberGuest && {
        MemberGuest: {
          create: createMemberEventDto.MemberGuest,
        },
      }),
    };

    return await this.prisma.memberEvent.create({
      data: memberEventData,
    });
  }

  findAll() {
    return `This action returns all memberEvent`;
  }

  findOne(id: number) {
    return `This action returns a #${id} memberEvent`;
  }

  update(id: number, updateMemberEventDto: UpdateMemberEventDto) {
    console.log(updateMemberEventDto);
    return `This action updates a #${id} memberEvent`;
  }

  remove(id: number) {
    return `This action removes a #${id} memberEvent`;
  }
}

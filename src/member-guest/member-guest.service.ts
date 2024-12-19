import { Injectable } from '@nestjs/common';
import { CreateMemberGuestDto } from './dto/create-member-guest.dto';
import { UpdateMemberGuestDto } from './dto/update-member-guest.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MemberGuestService {
  constructor(private prisma: PrismaService) {}

  async create(createMemberGuestDto: CreateMemberGuestDto) {
    const { MemberVisitID, FullName, PhoneNo, Rfid } = createMemberGuestDto;
    await this.prisma.memberVisit.update({
      where: {
        id: MemberVisitID,
      },
      data: {
        GuestCount: {
          increment: 1,
        },
      },
    });

    return await this.prisma.memberGuest.create({
      data: {
        MemberVisitID,
        FullName,
        PhoneNo,
        Rfid,
        VisitingDate: new Date().toLocaleDateString(),
        InTime: new Date().toISOString(),
      },
    });
  }

  async findAll(memberVisitId?: number) {
    if (memberVisitId) {
      return await this.prisma.memberGuest.findMany({
        where: {
          MemberVisitID: memberVisitId,
        },
      });
    }
    return await this.prisma.memberGuest.findMany();
  }

  findOne(id: number) {
    return this.prisma.memberGuest.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateMemberGuestDto: UpdateMemberGuestDto) {
    const { MemberVisitID } = updateMemberGuestDto;
    await this.prisma.memberVisit.update({
      where: {
        id: MemberVisitID,
      },
      data: {
        GuestCount: {
          decrement: 1,
        },
      },
    });
    return await this.prisma.memberGuest.update({
      where: {
        id,
      },
      data: {
        OutTime: new Date().toISOString(),
      },
    });
  }

  remove(id: number) {
    return `This action removes a #${id} memberGuest`;
  }
}

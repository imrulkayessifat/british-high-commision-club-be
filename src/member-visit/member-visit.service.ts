import { Injectable } from '@nestjs/common';
import { CreateMemberVisitDto } from './dto/create-member-visit.dto';
import { UpdateMemberVisitDto } from './dto/update-member-visit.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MemberVisitService {
  // eslint-disable-next-line prettier/prettier
  constructor(private prisma: PrismaService) { }
  async create(createMemberVisitDto: CreateMemberVisitDto) {
    // eslint-disable-next-line prettier/prettier
    const { MemberInfoID } = createMemberVisitDto;

    await this.prisma.member.update({
      where: {
        id: MemberInfoID,
      },
      data: {
        IsCheckIn: true,
      },
    });

    return await this.prisma.memberVisit.create({
      data: {
        MemberInfoID,
        VisitingDate: new Date().toLocaleDateString(),
        InTime: new Date().toISOString(),
      },
    });
  }

  findAll() {
    return this.prisma.memberVisit.findMany({
      include: {
        Member: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.memberVisit.findUnique({
      where: {
        id,
      },
      include: {
        Member: true,
      },
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async update(id: number, updateMemberVisitDto: UpdateMemberVisitDto) {
    const { MemberInfoID } = updateMemberVisitDto;
    if (!id) {
      return;
    }
    await this.prisma.member.update({
      where: {
        id: MemberInfoID,
      },
      data: {
        IsCheckIn: false,
      },
    });
    return await this.prisma.memberVisit.update({
      where: {
        id,
      },
      data: {
        OutTime: new Date().toISOString(),
      },
    });
  }

  remove(id: number) {
    return `This action removes a #${id} memberVisit`;
  }
}

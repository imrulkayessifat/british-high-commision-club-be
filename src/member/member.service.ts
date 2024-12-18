import { Injectable } from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MemberService {
  constructor(private prisma: PrismaService) {}
  create(createMemberDto: CreateMemberDto) {
    return this.prisma.member.create({ data: createMemberDto });
  }

  findAll() {
    return this.prisma.member.findMany();
  }

  findOne(id: number) {
    return this.prisma.member.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updateMemberDto: UpdateMemberDto) {
    return this.prisma.member.update({
      where: {
        id,
      },
      data: updateMemberDto,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} member`;
  }

  search(filters: { FullName?: string; Email?: string; PhoneNo?: string }) {
    const { FullName, Email, PhoneNo } = filters;

    // Build dynamic filter conditions
    const where: any = {};
    if (FullName) where.FullName = { contains: FullName, mode: 'insensitive' };
    if (Email) where.Email = { contains: Email, mode: 'insensitive' };
    if (PhoneNo) where.PhoneNo = { contains: PhoneNo, mode: 'insensitive' };

    return this.prisma.member.findMany({ where });
  }
}

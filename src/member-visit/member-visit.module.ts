import { Module } from '@nestjs/common';
import { MemberVisitService } from './member-visit.service';
import { MemberVisitController } from './member-visit.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [PrismaModule],
  controllers: [MemberVisitController],
  providers: [MemberVisitService, PrismaService],
})
export class MemberVisitModule {}

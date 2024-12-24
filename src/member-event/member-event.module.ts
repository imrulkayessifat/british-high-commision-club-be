import { Module } from '@nestjs/common';
import { MemberEventService } from './member-event.service';
import { MemberEventController } from './member-event.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [PrismaModule],
  controllers: [MemberEventController],
  providers: [MemberEventService, PrismaService],
})
export class MemberEventModule {}

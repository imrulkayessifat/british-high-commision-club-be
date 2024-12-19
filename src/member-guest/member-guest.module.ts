import { Module } from '@nestjs/common';
import { MemberGuestService } from './member-guest.service';
import { MemberGuestController } from './member-guest.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [PrismaModule],
  controllers: [MemberGuestController],
  providers: [MemberGuestService, PrismaService],
})
export class MemberGuestModule {}

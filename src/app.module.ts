import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { MemberModule } from './member/member.module';
import { MemberVisitModule } from './member-visit/member-visit.module';
import { MemberGuestModule } from './member-guest/member-guest.module';
import { MemberEventModule } from './member-event/member-event.module';

@Module({
  imports: [PrismaModule, MemberModule, MemberVisitModule, MemberGuestModule, MemberEventModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

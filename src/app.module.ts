import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { MemberModule } from './member/member.module';
import { MemberVisitModule } from './member-visit/member-visit.module';

@Module({
  imports: [PrismaModule, MemberModule, MemberVisitModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

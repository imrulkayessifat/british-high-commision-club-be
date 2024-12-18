import { Test, TestingModule } from '@nestjs/testing';
import { MemberVisitController } from './member-visit.controller';
import { MemberVisitService } from './member-visit.service';

describe('MemberVisitController', () => {
  let controller: MemberVisitController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MemberVisitController],
      providers: [MemberVisitService],
    }).compile();

    controller = module.get<MemberVisitController>(MemberVisitController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

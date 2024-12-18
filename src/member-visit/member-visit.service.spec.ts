import { Test, TestingModule } from '@nestjs/testing';
import { MemberVisitService } from './member-visit.service';

describe('MemberVisitService', () => {
  let service: MemberVisitService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MemberVisitService],
    }).compile();

    service = module.get<MemberVisitService>(MemberVisitService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

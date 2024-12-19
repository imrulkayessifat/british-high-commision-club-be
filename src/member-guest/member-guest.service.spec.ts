import { Test, TestingModule } from '@nestjs/testing';
import { MemberGuestService } from './member-guest.service';

describe('MemberGuestService', () => {
  let service: MemberGuestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MemberGuestService],
    }).compile();

    service = module.get<MemberGuestService>(MemberGuestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

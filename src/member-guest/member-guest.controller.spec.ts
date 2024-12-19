import { Test, TestingModule } from '@nestjs/testing';
import { MemberGuestController } from './member-guest.controller';
import { MemberGuestService } from './member-guest.service';

describe('MemberGuestController', () => {
  let controller: MemberGuestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MemberGuestController],
      providers: [MemberGuestService],
    }).compile();

    controller = module.get<MemberGuestController>(MemberGuestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { OrganizationTagController } from './organization-tag.controller';
import { OrganizationTagService } from './organization-tag.service';

describe('OrganizationTagController', () => {
  let controller: OrganizationTagController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrganizationTagController],
      providers: [OrganizationTagService],
    }).compile();

    controller = module.get<OrganizationTagController>(OrganizationTagController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

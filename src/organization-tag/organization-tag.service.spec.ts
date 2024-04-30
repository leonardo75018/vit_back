import { Test, TestingModule } from '@nestjs/testing';
import { OrganizationTagService } from './organization-tag.service';

describe('OrganizationTagService', () => {
  let service: OrganizationTagService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrganizationTagService],
    }).compile();

    service = module.get<OrganizationTagService>(OrganizationTagService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

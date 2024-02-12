import { Test, TestingModule } from '@nestjs/testing';
import { IssueTagService } from './issue-tag.service';

describe('IssueTagService', () => {
  let service: IssueTagService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IssueTagService],
    }).compile();

    service = module.get<IssueTagService>(IssueTagService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { IssueTagController } from './issue-tag.controller';
import { IssueTagService } from './issue-tag.service';

describe('IssueTagController', () => {
  let controller: IssueTagController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IssueTagController],
      providers: [IssueTagService],
    }).compile();

    controller = module.get<IssueTagController>(IssueTagController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

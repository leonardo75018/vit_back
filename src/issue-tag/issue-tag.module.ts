import { Module } from '@nestjs/common';
import { IssueTagService } from './issue-tag.service';
import { IssueTagController } from './issue-tag.controller';

@Module({
  controllers: [IssueTagController],
  providers: [IssueTagService],
})
export class IssueTagModule {}

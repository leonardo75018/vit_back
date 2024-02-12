import { Module } from '@nestjs/common';
import { IssueTagService } from './issue-tag.service';
import { IssueTagController } from './issue-tag.controller';

import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [IssueTagController],
  providers: [IssueTagService],
  imports: [PrismaModule],
})
export class IssueTagModule {}

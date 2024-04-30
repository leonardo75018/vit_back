import { Module } from '@nestjs/common';
import { IssueTagService } from './issue-tag.service';
import { IssueTagController } from './issue-tag.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [IssueTagController],
  providers: [IssueTagService, PrismaService],
})
export class IssueTagModule {}

import { Module } from '@nestjs/common';
import { IssueService } from './issue.service';
import { IssueController } from './issue.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [IssueController],
  providers: [IssueService, PrismaService],
})
export class IssueModule {}

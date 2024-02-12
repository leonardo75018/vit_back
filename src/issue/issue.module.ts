import { Module } from '@nestjs/common';
import { IssueService } from './issue.service';
import { IssueController } from './issue.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [IssueController],
  providers: [IssueService],
  imports: [PrismaModule],
})
export class IssueModule {}

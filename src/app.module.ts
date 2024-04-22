import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoleModule } from './role/role.module';
import { PrismaModule } from './prisma/prisma.module';
import { IssueModule } from './issue/issue.module';
import { TagModule } from './tag/tag.module';

@Module({
  imports: [RoleModule, PrismaModule, IssueModule, TagModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

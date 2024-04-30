import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoleModule } from './role/role.module';
import { PrismaModule } from './prisma/prisma.module';
import { IssueModule } from './issue/issue.module';
import { TagModule } from './tag/tag.module';
import { IssueTagModule } from './issue-tag/issue-tag.module';
import { UserModule } from './user/user.module';
import { OrganizationTagModule } from './organization-tag/organization-tag.module';

@Module({
  imports: [
    RoleModule,
    PrismaModule,
    IssueModule,
    TagModule,
    IssueTagModule,
    UserModule,
    OrganizationTagModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

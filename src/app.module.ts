import { Module } from '@nestjs/common';
import { IssueModule } from './issue/issue.module';
import { IssueTag } from './issue-tag/entities/issue-tag.entity';
import { OrganizationsModule } from './organization/organizations.module';
import { OrganizationTagModule } from './organization-tag/organization-tag.module';
import { TagModule } from './tag/tag.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    IssueModule,
    IssueTag,
    OrganizationsModule,
    OrganizationTagModule,
    TagModule,
    UserModule,
  ],
})
export class AppModule {}

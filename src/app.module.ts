import { Module } from '@nestjs/common';
import { IssueModule } from './issue/issue.module';

import { OrganizationsModule } from './organization/organizations.module';
import { OrganizationTagModule } from './organization-tag/organization-tag.module';
import { TagModule } from './tag/tag.module';
import { UserModule } from './users/users.module';
import { IssueTagModule } from './issue-tag/issue-tag.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    IssueModule,
    IssueTagModule,
    OrganizationsModule,
    OrganizationTagModule,
    TagModule,
    UserModule,
    AuthModule,
  ],
})
export class AppModule {}

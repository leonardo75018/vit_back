import { Module } from '@nestjs/common';
import { OrganizationTagService } from './organization-tag.service';
import { OrganizationTagController } from './organization-tag.controller';

@Module({
  controllers: [OrganizationTagController],
  providers: [OrganizationTagService],
})
export class OrganizationTagModule {}

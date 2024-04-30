import { Module } from '@nestjs/common';
import { OrganizationTagService } from './organization-tag.service';
import { OrganizationTagController } from './organization-tag.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [OrganizationTagController],
  providers: [OrganizationTagService, PrismaService],
})
export class OrganizationTagModule {}

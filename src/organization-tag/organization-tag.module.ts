import { Module } from '@nestjs/common';
import { OrganizationTagService } from './organization-tag.service';
import { OrganizationTagController } from './organization-tag.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [OrganizationTagController],
  providers: [OrganizationTagService],
  imports: [PrismaModule],
})
export class OrganizationTagModule {}

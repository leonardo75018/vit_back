import { Injectable } from '@nestjs/common';
import { CreateOrganizationTagDto } from './dto/create-organization-tag.dto';
import { UpdateOrganizationTagDto } from './dto/update-organization-tag.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrganizationTagService {
  constructor(private prismaService: PrismaService) {}
  async create(createOrganizationTagDto: CreateOrganizationTagDto) {
    const organization = await this.prismaService.organization.findUnique({
      where: { id: createOrganizationTagDto.organizationId },
      include: { tags: true },
    });

    if (!organization) throw new Error('Organization not found');
    if (organization.tags.length >= 3) {
      throw new Error('Organization already has 3 tags');
    }

    const tag = this.prismaService.tag.findUnique({
      where: { id: createOrganizationTagDto.tagId },
    });
    if (!tag) throw new Error('Tag not found');

    return this.prismaService.organizationTag.create({
      data: createOrganizationTagDto,
    });
  }

  findAll() {
    return this.prismaService.organizationTag.findMany();
  }

  findOne(id: number) {
    return this.prismaService.organizationTag.findUnique({ where: { id } });
  }

  update(id: number, updateOrganizationTagDto: UpdateOrganizationTagDto) {
    return this.prismaService.organizationTag.update({
      where: { id },
      data: updateOrganizationTagDto,
    });
  }

  remove(id: number) {
    return this.prismaService.organizationTag.delete({ where: { id } });
  }
}

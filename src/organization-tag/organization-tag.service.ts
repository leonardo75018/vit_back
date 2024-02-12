import { Injectable } from '@nestjs/common';
import { CreateOrganizationTagDto } from './dto/create-organization-tag.dto';
import { UpdateOrganizationTagDto } from './dto/update-organization-tag.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrganizationTagService {
  constructor(private prismaService: PrismaService) {}
  create(createOrganizationTagDto: CreateOrganizationTagDto) {
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

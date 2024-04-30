import { Injectable } from '@nestjs/common';
import { CreateOrganizationInformationsComplementaryTagDto } from './dto/create-organization-tag.dto';
import { UpdateOrganizationTagDto } from './dto/update-organization-tag.dto';

import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrganizationTagService {
  constructor(private prismaService: PrismaService) {}
  create(
    createOrganizationTagDto: CreateOrganizationInformationsComplementaryTagDto,
  ) {
    return this.prismaService.organizationInformationsComplementaryTag.create({
      data: createOrganizationTagDto,
    });
  }

  findAll() {
    return this.prismaService.organizationInformationsComplementaryTag.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} organizationTag`;
  }

  update(id: number, updateOrganizationTagDto: UpdateOrganizationTagDto) {
    return `This action updates a #${id} organizationTag`;
  }

  remove(id: number) {
    return `This action removes a #${id} organizationTag`;
  }
}

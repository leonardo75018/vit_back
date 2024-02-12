import { Injectable } from '@nestjs/common';
import { CreateOrganizationTagDto } from './dto/create-organization-tag.dto';
import { UpdateOrganizationTagDto } from './dto/update-organization-tag.dto';

@Injectable()
export class OrganizationTagService {
  create(createOrganizationTagDto: CreateOrganizationTagDto) {
    return 'This action adds a new organizationTag';
  }

  findAll() {
    return `This action returns all organizationTag`;
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

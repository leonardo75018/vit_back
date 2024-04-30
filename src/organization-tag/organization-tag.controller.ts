import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OrganizationTagService } from './organization-tag.service';
import { CreateOrganizationInformationsComplementaryTagDto } from './dto/create-organization-tag.dto';
import { UpdateOrganizationTagDto } from './dto/update-organization-tag.dto';

@Controller('organizationtag')
export class OrganizationTagController {
  constructor(
    private readonly organizationTagService: OrganizationTagService,
  ) {}

  @Post()
  create(
    @Body()
    createOrganizationTagDto: CreateOrganizationInformationsComplementaryTagDto,
  ) {
    return this.organizationTagService.create(createOrganizationTagDto);
  }

  @Get()
  findAll() {
    return this.organizationTagService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.organizationTagService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateOrganizationTagDto: UpdateOrganizationTagDto,
  ) {
    return this.organizationTagService.update(+id, updateOrganizationTagDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.organizationTagService.remove(+id);
  }
}

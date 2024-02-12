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
import { CreateOrganizationTagDto } from './dto/create-organization-tag.dto';
import { UpdateOrganizationTagDto } from './dto/update-organization-tag.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('Organization-tag')
@ApiTags('OrganizationTag')
export class OrganizationTagController {
  constructor(
    private readonly organizationTagService: OrganizationTagService,
  ) {}

  @Post()
  create(@Body() createOrganizationTagDto: CreateOrganizationTagDto) {
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

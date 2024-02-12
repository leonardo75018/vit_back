import { PartialType } from '@nestjs/mapped-types';
import { CreateOrganizationTagDto } from './create-organization-tag.dto';

export class UpdateOrganizationTagDto extends PartialType(
  CreateOrganizationTagDto,
) {}

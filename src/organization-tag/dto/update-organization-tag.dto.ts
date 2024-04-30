import { PartialType } from '@nestjs/swagger';
import { CreateOrganizationInformationsComplementaryTagDto } from './create-organization-tag.dto';

export class UpdateOrganizationTagDto extends PartialType(
  CreateOrganizationInformationsComplementaryTagDto,
) {}

import { ApiProperty } from '@nestjs/swagger';
export class CreateOrganizationInformationsComplementaryTagDto {
  @ApiProperty({ required: true })
  OrganizationInformationsComplementaryId: number;

  @ApiProperty({ required: true })
  tagId: number;
}

import { ApiProperty } from '@nestjs/swagger';
export class CreateOrganizationTagDto {
  @ApiProperty({ required: true })
  organizationId: number;
  @ApiProperty({ required: true })
  tagId: number;
}

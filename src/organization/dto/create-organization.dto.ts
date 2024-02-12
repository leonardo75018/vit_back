import { ApiProperty } from '@nestjs/swagger';

export class CreateOrganizationDto {
  @ApiProperty({ required: true })
  name: string;

  @ApiProperty({ required: true })
  email: string;

  @ApiProperty({ required: true })
  password: string;

  @ApiProperty({ required: true })
  location: string;

  @ApiProperty({ required: true })
  phoneNumber: number;

  @ApiProperty({ required: true })
  description: string;

  @ApiProperty({ required: true })
  @ApiProperty()
  webSiteUrl: string;
}

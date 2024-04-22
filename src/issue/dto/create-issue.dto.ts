import { ApiProperty } from '@nestjs/swagger';

export class CreateIssueDto {
  @ApiProperty({ required: true })
  name: string;
}

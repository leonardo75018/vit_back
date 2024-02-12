import { ApiProperty } from '@nestjs/swagger';

export class CreateIssueTagDto {
  @ApiProperty({ required: true })
  issueId: number;

  @ApiProperty({ required: true })
  tagId: number;
}

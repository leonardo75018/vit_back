import { ApiProperty } from '@nestjs/swagger';

export class CreateTagDto {
  @ApiProperty({ required: true })
  name: string;
}

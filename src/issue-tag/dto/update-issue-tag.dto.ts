import { PartialType } from '@nestjs/swagger';
import { CreateIssueTagDto } from './create-issue-tag.dto';

export class UpdateIssueTagDto extends PartialType(CreateIssueTagDto) {}

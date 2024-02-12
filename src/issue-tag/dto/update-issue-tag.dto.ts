import { PartialType } from '@nestjs/mapped-types';
import { CreateIssueTagDto } from './create-issue-tag.dto';

export class UpdateIssueTagDto extends PartialType(CreateIssueTagDto) {}

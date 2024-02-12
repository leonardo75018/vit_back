import { IssueTag } from 'src/issue-tag/entities/issue-tag.entity';

export class Issue {
  id: string;
  name: string;
  tags?: IssueTag[];
  createdAt: Date;
  updatedAt: Date;
}

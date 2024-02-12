import { IssueTag } from '@prisma/client';
import { OrganizationTag } from 'src/organization-tag/entities/organization-tag.entity';

export class Tag {
  id: number;
  name: string;
  issueTags: IssueTag[];
  organizationTags: OrganizationTag[];
  createdAt: Date;
  updatedAt: Date;
}

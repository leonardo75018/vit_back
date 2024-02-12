import { OrganizationTag } from 'src/organization-tag/entities/organization-tag.entity';

export class Organization {
  id: number;
  name: string;
  email: string;
  password: string;
  location: string;
  phoneNumber: number;
  description: string;
  webSiteUrl: string;
  tags: OrganizationTag[];
  createdAt: Date;
  updatedAt: Date;
}

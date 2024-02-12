import { Organization } from '../entities';

export interface OrganizationService {
  findById(organizationId: string): Promise<Organization>;
  findAll(): Promise<Organization[]>;
  findByIssue(issueId: string): Promise<Organization[]>;
  delete(organizationId: string): void;
}

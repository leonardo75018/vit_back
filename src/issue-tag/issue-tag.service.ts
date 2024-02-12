import { Injectable } from '@nestjs/common';
import { CreateIssueTagDto } from './dto/create-issue-tag.dto';
import { UpdateIssueTagDto } from './dto/update-issue-tag.dto';

@Injectable()
export class IssueTagService {
  create(createIssueTagDto: CreateIssueTagDto) {
    return 'This action adds a new issueTag';
  }

  findAll() {
    return `This action returns all issueTag`;
  }

  findOne(id: number) {
    return `This action returns a #${id} issueTag`;
  }

  update(id: number, updateIssueTagDto: UpdateIssueTagDto) {
    return `This action updates a #${id} issueTag`;
  }

  remove(id: number) {
    return `This action removes a #${id} issueTag`;
  }
}

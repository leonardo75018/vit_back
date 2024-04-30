import { Injectable } from '@nestjs/common';
import { CreateIssueTagDto } from './dto/create-issue-tag.dto';
import { UpdateIssueTagDto } from './dto/update-issue-tag.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class IssueTagService {
  constructor(private prisma: PrismaService) {}

  create(createIssueTagDto: CreateIssueTagDto) {
    const { issueId, tagId } = createIssueTagDto;

    const issue = this.prisma.issue.findUnique({ where: { id: issueId } });
    const tag = this.prisma.tag.findUnique({ where: { id: tagId } });
    if (!issue) {
      throw new Error(`issue ${issueId} not found`);
    }
    if (!tag) {
      throw new Error(`tag ${tagId} not found`);
    }
    return this.prisma.issueTag.create({ data: createIssueTagDto });
  }

  findAll() {
    return this.prisma.issueTag.findMany({
      include: {
        issue: {
          select: {
            id: true,
            name: true,
          },
        },
        tag: {},
      },
    });
  }

  findOne(id: number) {
    return this.prisma.issueTag.findUnique({ where: { id } });
  }

  update(id: number, updateIssueTagDto: UpdateIssueTagDto) {
    return this.prisma.issueTag.update({
      where: { id },
      data: updateIssueTagDto,
    });
  }

  remove(id: number) {
    const issueTag = this.prisma.issueTag.findUnique({ where: { id } });
    if (!issueTag) {
      throw new Error(`issue tag ${id} not found`);
    }
    return this.prisma.issueTag.delete({ where: { id } });
  }
}

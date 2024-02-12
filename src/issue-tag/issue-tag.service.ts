import { Injectable } from '@nestjs/common';
import { CreateIssueTagDto } from './dto/create-issue-tag.dto';
import { UpdateIssueTagDto } from './dto/update-issue-tag.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class IssueTagService {
  constructor(private prismaService: PrismaService) {}

  create(createIssueTagDto: CreateIssueTagDto) {
    return this.prismaService.issueTag.create({ data: createIssueTagDto });
  }

  findAll() {
    return this.prismaService.issueTag.findMany();
  }

  findOne(id: number) {
    return this.prismaService.issueTag.findUnique({ where: { id } });
  }

  update(id: number, updateIssueTagDto: UpdateIssueTagDto) {
    return this.prismaService.issueTag.update({
      where: { id },
      data: updateIssueTagDto,
    });
  }

  remove(id: number) {
    return this.prismaService.issueTag.delete({ where: { id } });
  }
}

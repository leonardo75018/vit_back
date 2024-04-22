import { Injectable } from '@nestjs/common';
import { CreateIssueDto } from './dto/create-issue.dto';
import { UpdateIssueDto } from './dto/update-issue.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class IssueService {
  constructor(private prismaService: PrismaService) {}
  create(createIssueDto: CreateIssueDto) {
    return this.prismaService.issue.create({ data: createIssueDto });
  }

  findAll() {
    return this.prismaService.issue.findMany();
  }

  findOne(id: number) {
    return this.prismaService.issue.findUnique({ where: { id } });
  }

  update(id: number, updateIssueDto: UpdateIssueDto) {
    return this.prismaService.issue.update({
      where: { id },
      data: updateIssueDto,
    });
  }

  remove(id: number) {
    this.prismaService.issue.delete({ where: { id } });
    return `issue ${id} has been deleted`;
  }
}

import { Injectable } from '@nestjs/common';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrganizationsService {
  constructor(private prisma: PrismaService) {}

  create(createOrganizationDto: CreateOrganizationDto) {
    return this.prisma.organization.create({
      data: createOrganizationDto,
    });
  }

  findAll() {
    return this.prisma.organization.findMany({
      include: {
        tags: {},
      },
    });
  }

  findOne(id: number) {
    return this.prisma.organization.findUnique({
      where: {
        id,
      },
    });
  }

  async findAllByIssue(id: number) {
    const issue = await this.prisma.issue.findUnique({
      where: {
        id: id,
      },
      include: {
        tags: true,
      },
    });

    console.log(issue);

    if (issue?.tags) {
      const organizations = this.prisma.organization.findMany({
        where: {
          tags: {
            some: {
              tagId: {
                in: issue.tags.map((item) => item.tagId),
              },
            },
          },
        },
      });

      return organizations;
    }
  }

  update(id: number, updateOrganizationDto: UpdateOrganizationDto) {
    return this.prisma.organization.update({
      where: { id },
      data: updateOrganizationDto,
    });
  }

  remove(id: number) {
    return this.prisma.organization.delete({
      where: {
        id,
      },
    });
  }
}

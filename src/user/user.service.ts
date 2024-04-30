import { Injectable, UnauthorizedException } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';
import { verify } from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

export const roundsOfHashing = 10;

interface IPayload {
  userId: number;
  iat: number;
  exp: number;
}

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}
  async create(createUserDto: CreateUserDto) {
    const userAlredyExist = await this.prismaService.user.findUnique({
      where: { email: createUserDto.email },
    });

    if (userAlredyExist) {
      throw new Error('User already exists');
    }

    const role = await this.prismaService.role.findUnique({
      where: {
        id: 2,
      },
    });

    if (!role) {
      throw new Error('Role is not found ');
    }

    const hashedPassword = await bcrypt.hash(
      createUserDto.password,
      roundsOfHashing,
    );

    createUserDto.password = hashedPassword;

    const user = await this.prismaService.user.create({ data: createUserDto });

    const userRole = await this.prismaService.role.findUnique({
      where: {
        id: user?.roleId,
      },
    });

    if (user && userRole?.name == 'organization') {
      await this.prismaService.organizationInformationsComplementary.create({
        data: {
          userId: user?.id,
        },
      });

      const UserOrganization =
        this.prismaService.organizationInformationsComplementary.findUnique({
          where: {
            userId: user.id,
          },
          include: {
            user: {},
          },
        });
      return UserOrganization;
    }
    return user;
  }

  findAll() {
    return this.prismaService.user.findMany({
      include: {
        organizationInformationsComplementary: {
          include: { tags: true },
        },
      },
    });
  }

  findOne(id: number) {
    return this.prismaService.user.findUnique({ where: { id } });
  }

  async findUsersOrganization() {
    const usersOrganization = await this.prismaService.user.findMany({
      where: {
        organizationInformationsComplementary: {
          isNot: null,
        },
      },
      include: {
        organizationInformationsComplementary: {},
      },
    });
    return usersOrganization;
  }

  async findUsersOrganizationByIssue(issueId: number) {
    const issue = await this.prismaService.issue.findUnique({
      where: {
        id: issueId,
      },
      include: {
        issueTags: true,
      },
    });

    if (issue?.issueTags) {
      const organizations = await this.prismaService.user.findMany({
        where: {
          organizationInformationsComplementary: {
            tags: {
              some: {
                tagId: {
                  in: issue.issueTags.map((item) => item.tagId),
                },
              },
            },
          },
        },
        include: {
          organizationInformationsComplementary: {
            include: {
              tags: true,
            },
          },
        },
      });
      return organizations;
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    if (updateUserDto.password) {
      updateUserDto.password = await bcrypt.hash(
        updateUserDto.password,
        roundsOfHashing,
      );
    }

    return this.prismaService.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  remove(id: number) {
    return this.prismaService.user.delete({ where: { id } });
  }

  async getUserAccount(userToken: string) {
    try {
      const { userId } = verify(userToken, 'zjP9h6ZI5LoSKCRj') as IPayload;
      const user = this.prismaService.user.findMany({
        where: {
          id: userId,
        },
        select: {
          name: true,
        },
      });
      return user;
    } catch (error) {
      throw new UnauthorizedException('Token experired');
    }
  }
}

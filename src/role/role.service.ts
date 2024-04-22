import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class RoleService {
  constructor(private prismaService: PrismaService) {}

  async create(createRoleDto: CreateRoleDto) {
    const role = await this.prismaService.role.create({
      data: createRoleDto,
    });
    return role;
  }

  findAll() {
    return this.prismaService.role.findMany();
  }

  findOne(id: number) {
    return this.prismaService.role.findUnique({
      where: {
        id,
      },
    });
  }
  update(id: number, updateRoleDto: UpdateRoleDto) {
    const role = this.prismaService.role.update({
      where: {
        id,
      },
      data: updateRoleDto,
    });
    if (!role) {
      throw new NotFoundException(`Role #${id} not found`);
    }

    return role;
  }

  remove(id: number) {
    const role = this.prismaService.role.findUnique({
      where: {
        id,
      },
    });
    if (!role) {
      throw new NotFoundException(`Role #${id} not found`);
    }
    this.prismaService.role.delete({
      where: {
        id,
      },
    });

    return `role width id ${id} has been deleted`;
  }
}

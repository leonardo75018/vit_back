import { Injectable } from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TagService {
  constructor(private prisma: PrismaService) {}
  create(createTagDto: CreateTagDto) {
    return this.prisma.tag.create({ data: createTagDto });
  }

  findAll() {
    return this.prisma.tag.findMany();
  }

  findOne(id: number) {
    return this.prisma.tag.findUnique({ where: { id } });
  }

  update(id: number, updateTagDto: UpdateTagDto) {
    return this.prisma.tag.update({ where: { id }, data: updateTagDto });
  }

  async remove(id: number) {
    const tag = await this.prisma.tag.delete({ where: { id } });
    return `tag ${tag.id} has been deleted`;
  }
}

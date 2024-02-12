import { Module } from '@nestjs/common';
import { TagService } from './tag.service';
import { TagController } from './tag.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [TagController],
  providers: [TagService],
  imports: [PrismaModule],
})
export class TagModule {}

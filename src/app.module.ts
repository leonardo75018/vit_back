import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoleModule } from './role/role.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [RoleModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

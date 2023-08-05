import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { CatController } from './controllers/cats.controller';
import { CatsService } from './cats/cats.service';

@Module({
  imports: [],
  controllers: [AppController,CatController],
  providers: [AppService, CatsService],
  exports:[]
})
export class AppModule {}

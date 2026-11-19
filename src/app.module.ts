import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { AnakAsuhModule } from './anak-asuh/anak-asuh.module.js';

@Module({
  imports: [AnakAsuhModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AnakAsuhService } from './anak-asuh.service.js';
import { AnakAsuhController } from './anak-asuh.controller.js';

@Module({
  controllers: [AnakAsuhController],
  providers: [AnakAsuhService],
})
export class AnakAsuhModule {}

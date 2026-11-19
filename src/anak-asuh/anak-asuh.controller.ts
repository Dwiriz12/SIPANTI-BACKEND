import { Body, Controller, Delete, Get, Param, Patch, Post, } from '@nestjs/common';
import { AnakAsuhService } from './anak-asuh.service.js';
import { CreateAnakAsuhDto } from './dto/create-anak-asuh.dto.js';
import { UpdateAnakAsuhDto } from './dto/update-anak-asuh.dto.js';

@Controller('anak-asuh')
export class AnakAsuhController {
  constructor(private readonly anakAsuhService:
    AnakAsuhService) { }

  @Post()
  create(@Body() dto: CreateAnakAsuhDto) {
    return this.anakAsuhService.create(dto);
  }

  @Get()
  findAll() {
    return this.anakAsuhService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.anakAsuhService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto:
    UpdateAnakAsuhDto) {
    return this.anakAsuhService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.anakAsuhService.remove(id);
  }
}
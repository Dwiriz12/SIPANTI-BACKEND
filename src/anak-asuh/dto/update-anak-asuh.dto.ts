import { PartialType } from '@nestjs/mapped-types';
import { CreateAnakAsuhDto } from './create-anak-asuh.dto.js';

export class UpdateAnakAsuhDto extends PartialType(CreateAnakAsuhDto) {}

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CategorieService } from './categorie.service';
import { CreateCategorieDto } from './dto/create-categorie.dto';
import { UpdateCategorieDto } from './dto/update-categorie.dto';

@Controller('categorie')
export class CategorieController {
  constructor(private readonly categorieService: CategorieService) {}

  @Get()
  findAll() {
    return this.categorieService.findAll();
  }
}

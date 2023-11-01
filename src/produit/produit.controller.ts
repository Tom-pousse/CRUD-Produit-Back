import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ProduitService } from './produit.service';
import { CreateProduitDto } from './dto/create-produit.dto';
import { UpdateProduitDto } from './dto/update-produit.dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { Produit } from './entities/produit.entity';
import { Utilisateur } from 'src/utilisateur/entities/utilisateur.entity';

@Controller('produit')
export class ProduitController {
  constructor(private readonly produitService: ProduitService) {}

  @Post('Add')
  @UseGuards(AuthGuard())
  create(@Body() createProduitDto: CreateProduitDto) {
    return this.produitService.create(createProduitDto);
  }

  @Get()
  findAll() {
    return this.produitService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.produitService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard())
  update(@Param('id') id: number, @Body() updateProduitDto: UpdateProduitDto) {
    console.log('maj', updateProduitDto);
    return this.produitService.update(+id, updateProduitDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard())
  remove(@Param('id') id: string) {
    return this.produitService.remove(+id);
  }
}

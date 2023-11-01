import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateProduitDto } from './dto/create-produit.dto';
import { UpdateProduitDto } from './dto/update-produit.dto';
import { Produit } from './entities/produit.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { log } from 'console';

@Injectable()
export class ProduitService {
  constructor(
    @InjectRepository(Produit)
    private produitRepository: Repository<Produit>,
  ) {}

  async create(createProduitDto: CreateProduitDto) {
    try {
      const newProduit = this.produitRepository.create(createProduitDto);
      const result = await this.produitRepository.save(newProduit);
      return result;
    } catch (error) {
      throw new InternalServerErrorException(
        `erreur à la création : ${error.message}`,
      );
    }
  }

  findAll() {
    return this.produitRepository.find();
  }

  async findOne(id: number) {
    try {
      const found = await this.produitRepository.findOneBy({ id: id });
      console.log(found);

      if (!found) {
        throw new NotFoundException(`Produit avec l'ID ${id} non trouvé`);
      }
      return found;
    } catch (error) {
      throw new InternalServerErrorException(
        `erreur lors de la recherche du produit : ${error.message}`,
      );
    }
  }

  async update(id: number, updateProduitDto: UpdateProduitDto) {
    try {
      const monId = await this.findOne(id);
      if (!monId) {
        throw new NotFoundException(
          `Le produit avec l'ID ${id} n'a pas été trouvé.`,
        );
      }

      const newProduit = this.produitRepository.merge(monId, updateProduitDto);
      const result = await this.produitRepository.save(newProduit);

      return result;
    } catch (error) {
      throw new InternalServerErrorException(
        ` erreur de la mise à jour : ${error.message}`,
      );
    }
  }

  async remove(id: number) {
    try {
      const found = await this.findOne(id);
      const nomProduit = found.nom;
      await this.produitRepository.remove(found);
      return `Le produit: ${nomProduit} à bien été supprimé.`;
    } catch (error) {
      throw new InternalServerErrorException(
        `erreur de la suppression : ${error.message}`,
      );
    }
  }
}

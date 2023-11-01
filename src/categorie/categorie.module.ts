import { Module } from '@nestjs/common';
import { CategorieService } from './categorie.service';
import { CategorieController } from './categorie.controller';
import { Categorie } from './entities/categorie.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    TypeOrmModule.forFeature([Categorie]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [CategorieController],
  providers: [CategorieService],
})
export class CategorieModule {}

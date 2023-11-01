import { IsInt, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProduitDto {
  @IsString()
  @IsNotEmpty()
  nom: string;

  @IsNumber()
  @IsNotEmpty()
  prix: number;

  @IsInt()
  @IsNotEmpty()
  quantite: number;

  @IsInt()
  @IsNotEmpty()
  id_categorie: number;
}

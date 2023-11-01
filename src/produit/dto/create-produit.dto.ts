import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsString,
  Matches,
  matches,
} from 'class-validator';

export class CreateProduitDto {
  @IsString()
  @IsNotEmpty()
  @Matches(/^(?=.*[a-zA-Z])[a-zA-Z0-9'àéè^¨ ]+$/, {
    message:
      'le nom ne peux contenir que: Des lettres, des chiffres, à, é, è, ^, ¨, et apostrope.',
  })
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

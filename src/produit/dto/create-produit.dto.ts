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
  @Matches(/^[0-9]+(.[0-9]+)?$/, {
    message: 'le prix ne peux contenir que des chiffres ex: 12.34 ou 1234.  ',
  })
  prix: number;

  @IsInt()
  @IsNotEmpty()
  @Matches(/^[0-9]+$/, {
    message: 'la quantité ne peux contenir que des chiffres ex: 1234.  ',
  })
  quantite: number;

  @IsInt()
  @IsNotEmpty()
  id_categorie: number;
}

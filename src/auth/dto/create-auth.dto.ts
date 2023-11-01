import { IsEmail, IsNotEmpty, IsString, Matches } from 'class-validator';

export class CreateAuthDto {
  @IsString()
  @IsNotEmpty()
  nom: string;

  @IsString()
  @IsNotEmpty()
  prenom: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @Matches(
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/,
    {
      message:
        'Votre mot de passe doit contenir: 1 lettre majuscule et minuscule, un chiffre, un caractère spécial et faire au moins 8 caractère.',
    },
  )
  mot_de_passe: string;
}

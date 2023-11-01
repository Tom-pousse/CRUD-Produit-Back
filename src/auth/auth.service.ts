import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { LoginDto } from './dto/login-auth.dto';
import { JwtService } from '@nestjs/jwt';
import { Utilisateur } from 'src/utilisateur/entities/utilisateur.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Utilisateur)
    private userRepository: Repository<Utilisateur>,
    private jwtService: JwtService,
  ) {}

  async register(createAuthDto: CreateAuthDto) {
    const { nom, prenom, email, mot_de_passe } = createAuthDto;

    // hashage du mot de passe
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(mot_de_passe, salt);

    // création d'une entité user
    const user = this.userRepository.create({
      nom,
      prenom,
      email,
      mot_de_passe: hashedPassword,
    });
    console.log('je veux save', user);

    try {
      // enregistrement de l'entité user
      const createdUser = await this.userRepository.save(user);
      delete createdUser.mot_de_passe;
      return 'Votre compte a été créé';
    } catch (error) {
      // gestion des erreurs
      if (error.code === '23505') {
        throw new ConflictException('username already exists');
      } else {
        console.log('error');

        throw new InternalServerErrorException();
      }
    }
  }

  async login(loginDto: LoginDto) {
    const { email, mot_de_passe } = loginDto;
    const user = await this.userRepository.findOneBy({ email });

    if (user && (await bcrypt.compare(mot_de_passe, user.mot_de_passe))) {
      const payload = { email };
      const accessToken = await this.jwtService.sign(payload);
      return { accessToken };
    } else {
      throw new UnauthorizedException('Ces identifiants ne sont pas reconnus.');
    }
  }
}

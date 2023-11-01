import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UtilisateurModule } from './utilisateur/utilisateur.module';
import { CategorieModule } from './categorie/categorie.module';
import { ProduitModule } from './produit/produit.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Utilisateur } from './utilisateur/entities/utilisateur.entity';
import { Categorie } from './categorie/entities/categorie.entity';
import { Produit } from './produit/entities/produit.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: [`.env`] }),
    UtilisateurModule,
    CategorieModule,
    ProduitModule,
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      entities: [Utilisateur, Categorie, Produit],
      synchronize: false,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Categorie } from 'src/categorie/entities/categorie.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Produit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, length: 255 })
  nom: string;

  @Column({ nullable: false, precision: 12, scale: 2 })
  prix: number;

  @Column({ nullable: false, type: 'int' })
  quantite: number;

  @Column({ nullable: false, type: 'int' })
  id_categorie: number;

  @ManyToOne(() => Categorie, (categorie) => categorie.produit, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({ name: 'id_categorie' })
  categorie: Categorie[];
}

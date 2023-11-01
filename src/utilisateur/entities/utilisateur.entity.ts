import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Utilisateur {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, length: 255 })
  nom: string;

  @Column({ nullable: false, length: 255 })
  prenom: string;

  @Column({ nullable: false, unique: true, length: 255 })
  email: string;

  @Column({ nullable: false, length: 255 })
  mot_de_passe: string;
}

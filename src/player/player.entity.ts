import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Character } from '../character/character.entity';

@Entity()
export class PlayerEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column({ default: false })
  banned: boolean;

  @OneToMany(() => Character, (character) => character.player, {
    cascade: true,
  })
  characters: Character[];
}

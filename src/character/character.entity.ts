import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { PlayerEntity } from '../player/player.entity';

@Entity()
export class Character {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: 0 })
  experience: number;

  @ManyToOne(() => PlayerEntity, (player) => player.characters, {
    onDelete: 'CASCADE',
  })
  player: PlayerEntity;
}

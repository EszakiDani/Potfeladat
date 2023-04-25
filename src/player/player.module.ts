import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayerEntity } from './player.entity';
import { Character } from '../character/character.entity';
import { PlayerService } from './player.service';
import { PlayerController } from './player.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PlayerEntity, Character])],
  providers: [PlayerService],
  controllers: [PlayerController],
  exports: [PlayerService],
})
export class PlayerModule {}

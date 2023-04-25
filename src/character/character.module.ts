import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayerEntity } from '../player/player.entity';
import { Character } from '../character/character.entity';
import { CharactersService } from './character.service';
import { CharactersController } from './character.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PlayerEntity, Character])],
  providers: [CharactersService],
  controllers: [CharactersController],
  exports: [CharactersService],
})
export class CharacterModule {}

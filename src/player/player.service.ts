import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PlayerEntity } from './player.entity';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { FindOneOptions } from 'typeorm';

@Injectable()
export class PlayerService {
  constructor(
    @InjectRepository(PlayerEntity)
    private readonly playerRepository: Repository<PlayerEntity>,
  ) {}

  async create(createPlayerDto: CreatePlayerDto): Promise<PlayerEntity> {
    const player = this.playerRepository.create(createPlayerDto);
    return this.playerRepository.save(player);
  }

  async findAll(): Promise<PlayerEntity[]> {
    return this.playerRepository.find();
  }

  async findOne(id: number): Promise<PlayerEntity> {
    const options: FindOneOptions<PlayerEntity> = { relations: ['team'] };
    return await this.findOne(id);
  }  
  
  async update(
    id: number,
    updatePlayerDto: UpdatePlayerDto,
  ): Promise<PlayerEntity> {
    const options: FindOneOptions<PlayerEntity> = { relations: ['team'] };
    const player = await this.findOne(id);
    if (!player) {
      throw new NotFoundException(`Player with ID ${id} not found`);
    }
    this.playerRepository.merge(player, updatePlayerDto);
    return this.playerRepository.save(player);
  }
  

  async remove(id: number): Promise<void> {
    const result = await this.playerRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Player with ID ${id} not found`);
    }
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Character } from './character.entity';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';

@Injectable()
export class CharactersService {
  constructor(
    @InjectRepository(Character)
    private charactersRepository: Repository<Character>,
  ) {}

  async findAll(): Promise<Character[]> {
    return this.charactersRepository.find();
  }

  async findOne(id: number): Promise<Character> {
    const character = await this.charactersRepository.findOne({
      where: { id },
    });
    if (!character) {
      throw new NotFoundException(`Character with ID ${id} not found`);
    }
    return character;
  }

  async create(createCharacterDto: CreateCharacterDto): Promise<Character> {
    const character = this.charactersRepository.create(createCharacterDto);
    return this.charactersRepository.save(character);
  }

  async earnExperience(id: number, amount: number): Promise<Character> {
    const character = await this.findOne(id);
    character.experience += amount;
    return this.charactersRepository.save(character);
  }

  async update(
    id: number,
    updateCharacterDto: UpdateCharacterDto,
  ): Promise<Character> {
    const character = await this.findOne(id);
    const { name, experience } = updateCharacterDto;
    character.name = name || character.name;
    character.experience = experience || character.experience;
    return this.charactersRepository.save(character);
  }

  async remove(id: number): Promise<void> {
    const character = await this.findOne(id);
    await this.charactersRepository.remove(character);
  }
}

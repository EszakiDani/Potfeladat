import { Controller, Get, Param, Patch, Body } from '@nestjs/common';
import { CharactersService } from './character.service';
import { Character } from './character.entity';
import { UpdateCharacterDto } from './dto/update-character.dto';

@Controller('characters')
export class CharactersController {
  constructor(private readonly characterService: CharactersService) {}

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateCharacterDto: UpdateCharacterDto,
  ): Promise<Character> {
    return this.characterService.update(id, updateCharacterDto);
  }
  
  @Get(':id')
  findOne(@Param('id') id: number): Promise<Character> {
    return this.characterService.findOne(id);
  }


  @Patch(':id/earn-experience')
  earnExperience(
    @Param('id') id: number,
    @Body() body: { amount: number },
  ): Promise<Character> {
    return this.characterService.earnExperience(id, body.amount);
  }
  
  @Patch(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.characterService.remove(id);
  }

  @Get()
  findAll(): Promise<Character[]> {
    return this.characterService.findAll();
  }

  
}

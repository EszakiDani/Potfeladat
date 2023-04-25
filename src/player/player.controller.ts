import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { PlayerService } from './player.service';
import { PlayerEntity } from './player.entity';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';

@Controller('player')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Post()
  create(@Body() createPlayerDto: CreatePlayerDto): Promise<PlayerEntity> {
    return this.playerService.create(createPlayerDto);
  }

  @Get()
  findAll(): Promise<PlayerEntity[]> {
    return this.playerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<PlayerEntity> {
    return this.playerService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updatePlayerDto: UpdatePlayerDto,
  ): Promise<PlayerEntity> {
    return this.playerService.update(id, updatePlayerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.playerService.remove(id);
  }
}
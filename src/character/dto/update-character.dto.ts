import { IsNumber, IsOptional } from 'class-validator';

export class UpdateCharacterDto {
  name?: string;
  experience?: number;
}

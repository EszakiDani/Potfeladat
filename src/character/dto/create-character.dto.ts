import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateCharacterDto {
  @IsString()
  @MinLength(3)
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  experience: number;
}

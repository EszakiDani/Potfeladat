import { IsNumber, IsOptional, IsString, MinLength } from 'class-validator';

export class UpdateCharacterDto {
  @IsString()
  @MinLength(3)
  @IsOptional()
  name?: string;

  @IsNumber()
  @IsOptional()
  experience?: number;
}

export class CreateCharacterDto {
  @IsString()
  @MinLength(3)
  name: string;

  @IsNumber()
  @IsOptional()
  experience?: number;
}


export class EarnExpDto {
  @IsNumber()
  amount: number;
}

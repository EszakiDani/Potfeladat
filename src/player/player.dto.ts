import { IsBoolean, IsEmail, IsOptional } from 'class-validator';

export class CreatePlayerDto {
  @IsEmail()
  email: string;

  @IsBoolean()
  @IsOptional()
  banned?: boolean;
}

export class UpdatePlayerDto {
  @IsEmail()
  @IsOptional()
  email?: string;

  @IsBoolean()
  @IsOptional()
  banned?: boolean;
}

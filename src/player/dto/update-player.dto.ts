import { IsBoolean, IsEmail, IsNotEmpty } from 'class-validator';

export class UpdatePlayerDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsBoolean()
  banned: boolean;
}

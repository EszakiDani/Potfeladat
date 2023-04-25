import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreatePlayerDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  banned: boolean;
}

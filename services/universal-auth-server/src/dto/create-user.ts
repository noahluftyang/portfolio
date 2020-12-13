import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { Service } from 'models/mod';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @MinLength(8)
  password: string;

  @IsNotEmpty()
  username: string;

  service: Service;
}

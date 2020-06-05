import { Field, InputType } from '@nestjs/graphql';

import { LoginUserDto } from './login-user';

@InputType()
export class RegisterUserDto extends LoginUserDto {
  @Field({ nullable: true })
  username?: string;
}

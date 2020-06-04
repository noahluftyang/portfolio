import { Field, ID, ObjectType } from '@nestjs/graphql';

enum Provider {
  FACEBOOK,
  GOOGLE,
}

@ObjectType()
export class SocialAccount {
  @Field(type => ID)
  id: string;
  userId: number;
  provider: Provider;
}

import { Field, InputType } from '@nestjs/graphql';

enum Provider {
  FACEBOOK,
  GOOGLE,
}

@InputType()
export class ConnectSocialDto {
  @Field()
  id: string;

  @Field()
  provider: Provider;

  @Field()
  userId: number;
}

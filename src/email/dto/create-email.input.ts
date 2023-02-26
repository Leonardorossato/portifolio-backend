import { InputType, Int, Field } from '@nestjs/graphql';
@InputType()
export class CreateEmailInput {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  nome: string;

  @Field(() => String)
  email: string;
}

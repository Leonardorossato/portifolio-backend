import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class EmailSchema {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  nome: string;

  @Field(() => String)
  email: string;
}

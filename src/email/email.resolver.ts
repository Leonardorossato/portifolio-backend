import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateEmailInput } from './dto/create-email.input';
import { EmailService } from './email.service';
import { EmailSchema } from './schema/email.schema';

@Resolver()
export class EmailResolver {
  constructor(private readonly emailService: EmailService) {}

  @Mutation(() => EmailSchema)
  async createEmail(
    @Args('createEmailInput') createEmailInput: CreateEmailInput,
  ) {
    return await this.emailService.create(createEmailInput);
  }

  @Query(() => [EmailSchema], { name: 'email' })
  findAll(): Promise<EmailSchema[]> {
    return this.emailService.findAll();
  }
}

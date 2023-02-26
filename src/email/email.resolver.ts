import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateEmailInput } from './dto/create-email.input';
import { EmailService } from './email.service';

@Resolver(() => EmailService)
export class EmailResolver {
  constructor(private readonly emailService: EmailService) {}

  @Mutation(() => EmailService)
  createEmail(@Args('createEmailInput') createEmailInput: CreateEmailInput) {
    return this.emailService.create(createEmailInput);
  }

  @Query(() => [EmailService], { name: 'email' })
  findAll() {
    return this.emailService.findAll();
  }
}

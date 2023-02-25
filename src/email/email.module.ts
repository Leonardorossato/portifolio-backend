import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { EmailResolver } from './email.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Email } from './entities/email.entity';
import { EmailHelper } from './helpers/email.helper';

@Module({
  imports: [TypeOrmModule.forFeature([Email])],
  providers: [EmailResolver, EmailService, EmailHelper],
})
export class EmailModule {}

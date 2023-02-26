import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateEmailInput } from './dto/create-email.input';
import { Email } from './entities/email.entity';
import { EmailHelper } from './helpers/email.helper';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EmailService {
  constructor(
    @InjectRepository(Email)
    private readonly emailRepository: Repository<Email>,
    private readonly emailHelper: EmailHelper,
  ) {}

  async create(createEmailInput: CreateEmailInput) {
    try {
      const email = await this.emailRepository.create(createEmailInput);
      const response = await this.emailRepository.save(email);
      await this.emailHelper.formatEmailResponse([response]);
      return response;
    } catch (error) {
      throw new HttpException('Error creating a email', HttpStatus.BAD_REQUEST);
    }
  }

  async findAll(): Promise<Email[]> {
    try {
      const email = await this.emailRepository.find();
      const response = await this.emailRepository.save(email);
      await this.emailHelper.formatEmailResponse(response);
      return response;
    } catch (error) {
      throw new HttpException(
        'Error to find all emails',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}

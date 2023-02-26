import { Injectable } from '@nestjs/common';
import { Email } from '../entities/email.entity';
import { EmailSchema } from '../schema/email.schema';

@Injectable()
export class EmailHelper {
  formatEmailResponse(data: Array<Email>): Array<EmailSchema> {
    if (!data) {
      return [];
    }

    let emails: Array<EmailSchema> = [];
    data.forEach((element) => {
      emails.push({
        id: element.id,
        nome: element.nome,
        email: element.email,
      });
    });
    return emails;
  }
}

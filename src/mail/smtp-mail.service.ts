import { Injectable } from '@nestjs/common';
import { MailService } from './mail.service';

// inversão de dependência
@Injectable()
export class SMTPMailService implements MailService {
  sendEmail(): string {
    return 'SMTP Mail';
  }
}

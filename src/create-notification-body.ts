import { IsNotEmpty, IsUUID, Length } from 'class-validator';

// interface
export class CreateNotificationBody {
  //validation
  @IsNotEmpty()
  @IsUUID()
  recipientId: string;

  @IsNotEmpty()
  @Length(5, 300)
  content: string;

  @IsNotEmpty()
  category: string;
}

import { IsEmail, Length } from 'class-validator';

import * as MESSAGES from './messages.json';

export class CreateUserDto {
  @Length(3, 255, {
    message: MESSAGES.lengthError,
  })
  name: string;

  @IsEmail(
    {
      allow_display_name: true,
      allow_utf8_local_part: false,
      allow_ip_domain: false,
    },
    { message: MESSAGES.formatError },
  )
  @Length(3, 255, {
    message: MESSAGES.lengthError,
  })
  email: string;

  @Length(3, 255, {
    message: MESSAGES.lengthError,
  })
  type: string;

  @Length(6, 255, {
    message: MESSAGES.lengthError,
  })
  password: string;

  @Length(3, 255, {
    message: MESSAGES.lengthError,
  })
  company: string;
}

import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from '../../src/user/user.service';

@Controller()
export class AuthController {
  constructor(private userService: UserService) {}

  @Post('sign-in')
  async signIn(@Body() body) {
    console.log(body);
    return body;
  }
}

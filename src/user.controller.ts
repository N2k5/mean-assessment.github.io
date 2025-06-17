import { Controller, Post, Body, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('auth')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Sign up
  @Post('sign-up')
  async signUp(@Body() body: { username: string; password: string }) {
    return this.userService.signUp(body.username, body.password);
  }

  // Sign in
  @Post('sign-in')
  async signIn(@Body() body: { username: string; password: string }) {
    return this.userService.signIn(body.username, body.password);
  }

  // Sign out
  @Post('sign-out')
  async signOut(@Body() body: { token: string }) {
    return this.userService.signOut(body.token);
  }
}

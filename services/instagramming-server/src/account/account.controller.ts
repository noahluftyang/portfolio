import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';

import { LoginUserDto, RegisterUserDto } from '../dto/mod';
import { AccountService } from './account.service';
import { LocalAuthGuard } from './local-auth.guard';

@ApiTags('accounts')
@Controller('accounts')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @ApiBody({ type: LoginUserDto })
  @Post('login')
  @UseGuards(LocalAuthGuard)
  async login(@Req() req): Promise<any> {
    return this.accountService.login(req.user);
  }

  @ApiBody({ type: RegisterUserDto })
  @Post('register')
  register(@Body() registerUserDto: RegisterUserDto) {
    return this.accountService.register(registerUserDto);
  }

  @Get('facebook')
  facebookLogin() {}

  @Get('facebook/callback')
  facebookLoginCallback() {}

  @Get('google')
  googleLogin() {}

  @Get('google/callback')
  googleLoginCallback() {}
}

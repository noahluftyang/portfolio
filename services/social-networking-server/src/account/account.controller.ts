import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';

import { AccountService } from './account.service';
import { LoginUserDto, RegisterUserDto } from './dto/mod';
import {
  FacebookAuthGuard,
  GoogleAuthGuard,
  LocalAuthGuard,
} from './guards/mod';

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
}

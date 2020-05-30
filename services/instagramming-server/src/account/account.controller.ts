import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';

import { LoginUserDto, RegisterUserDto } from '../dto/mod';
import { AccountService } from '../shared/services/mod';

@ApiTags('accounts')
@Controller('accounts')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @ApiBody({ type: LoginUserDto })
  @Post('login')
  async login(@Body() loginUserDto: LoginUserDto): Promise<any> {
    return this.accountService.login(loginUserDto);
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

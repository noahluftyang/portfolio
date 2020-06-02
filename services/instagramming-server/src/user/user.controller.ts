import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';

import { User } from '../interfaces/mod';
import { JwtAuthGuard } from '../shared/guards/mod';
import { UserService } from '../shared/services/mod';

@ApiBearerAuth()
@ApiTags('users')
@Controller('users')
@UseGuards(JwtAuthGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get('me')
  profile(@Req() req: Request) {
    return req.user;
  }

  @Get(':id')
  findOne(@Param('id', new ParseIntPipe()) id: number): Promise<User> {
    return this.userService.findById(id);
  }

  // @Get(':id/feeds')
  // userFeeds(@Param('id', new ParseIntPipe()) id: number) {
  //   return this.postService.findByAuthorId(id);
  // }
}

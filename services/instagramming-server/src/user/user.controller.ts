import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { JwtAuthGuard } from '../shared/guards/mod';
import { PostService, UserService } from '../shared/services/mod';

@ApiBearerAuth()
@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(
    private readonly postService: PostService,
    private readonly userService: UserService,
  ) {}

  @Get()
  async findAll() {}

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.userService.findById(parseInt(id, 10));
  }

  @Get(':id/feeds')
  @UseGuards(JwtAuthGuard)
  async userFeeds(@Param('id') id: string) {
    return this.postService.findByAuthorId(parseInt(id, 10));
  }
}

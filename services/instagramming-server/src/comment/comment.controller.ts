import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { JwtAuthGuard } from '../shared/guards/mod';
import { CommentService } from './comment.service';

@ApiBearerAuth()
@ApiTags('comments')
@Controller('comments')
@UseGuards(JwtAuthGuard)
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Get()
  list() {
    return this.commentService.findAll();
  }

  @Get(':id')
  get(@Param('id', new ParseIntPipe()) id: number) {
    return this.commentService.findOne(id);
  }
}

import {
  Body,
  Controller,
  Get,
  Post,
  Redirect,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';

import { CreateCatDto } from '../dto/create-cat.dto';
import { Cat } from '../interfaces/cat';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  create(@Body() createCatDto: CreateCatDto, @Res() res: Response) {
    this.catsService.create(createCatDto);
  }

  @Get()
  findAll(): Cat[] {
    return this.catsService.findAll();
  }

  @Get('redirect')
  @Redirect('https://nestjs.com', 301)
  findWildcard() {
    return 'This route uses a wildcard';
  }
}

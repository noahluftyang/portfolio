import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

import { JwtAuthGuard } from '../shared/guards/mod';
import { MediaService } from './media.service';

@ApiBearerAuth()
@ApiTags('media')
@Controller('media')
@UseGuards(JwtAuthGuard)
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  @ApiOperation({ summary: 'Create a media' })
  @Post()
  create(@Body() createMediaDto: any): Promise<any> {
    return this.mediaService.create(createMediaDto);
  }

  @ApiOperation({ summary: 'Get all media' })
  @Get()
  findAll(): Promise<any[]> {
    return this.mediaService.findAll();
  }

  @ApiOperation({ summary: 'Get a media from id' })
  @Get(':id')
  findOne(@Param('id', new ParseIntPipe()) id: number): Promise<any> {
    return this.mediaService.findById(id);
  }
}

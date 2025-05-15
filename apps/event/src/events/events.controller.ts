import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from '@lib/dtos/create-event.dto';

@Controller('events')
export class EventsController {
  constructor(private readonly svc: EventsService) {}
  @Post()
  create(@Body() dto: CreateEventDto) {
    return this.svc.create(dto);
  }

  @Get()
  findAll() {
    return this.svc.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.svc.findOne(id);
  }
}

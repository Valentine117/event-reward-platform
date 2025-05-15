// apps/event/src/events/events.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Event } from '@lib/schemas/event.schema';
import { CreateEventDto } from '@lib/dtos/create-event.dto';

@Injectable()
export class EventsService {
  constructor(@InjectModel(Event.name) private model: Model<Event>) {}

  create(dto: CreateEventDto) {
    return new this.model(dto).save();
  }
  findAll() {
    return this.model.find().exec();
  }
  async findOne(id: string) {
    const e = await this.model.findById(id).exec();
    if (!e) throw new NotFoundException('Event not found');
    return e;
  }
}

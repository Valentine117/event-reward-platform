import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RewardRequest } from '@lib/schemas/request.schema';

@Injectable()
export class RequestsService {
  constructor(
    @InjectModel(RewardRequest.name) private model: Model<RewardRequest>,
  ) {}

  create(userId: string, dto: { eventId: string; rewardId: string }) {
    const doc = new this.model({ ...dto, user: userId });
    return doc.save();
  }
  findByUser(userId: string) {
    return this.model.find({ user: userId }).exec();
  }
  findAll() {
    return this.model.find().exec();
  }
}

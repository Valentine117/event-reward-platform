import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  RewardRequest,
  RewardRequestSchema,
} from '@lib/schemas/request.schema';
import { RequestsService } from './requests.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: RewardRequest.name, schema: RewardRequestSchema },
    ]),
  ],
  controllers: [],
  providers: [RequestsService],
})
export class RequestsModule {}

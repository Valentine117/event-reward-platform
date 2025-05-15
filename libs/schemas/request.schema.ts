import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

export enum RequestStatus {
  PENDING = "PENDING",
  SUCCESS = "SUCCESS",
  FAILED = "FAILED",
}

@Schema({ timestamps: true })
export class RewardRequest extends Document {
  @Prop({ type: Types.ObjectId, ref: "Event", required: true })
  event: Types.ObjectId;
  @Prop({ type: Types.ObjectId, ref: "Reward", required: true })
  reward: Types.ObjectId;
  @Prop({ type: Types.ObjectId, ref: "User", required: true })
  user: Types.ObjectId;
  @Prop({ enum: RequestStatus, default: RequestStatus.PENDING })
  status: RequestStatus;
}
export const RewardRequestSchema = SchemaFactory.createForClass(RewardRequest);

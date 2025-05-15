import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ timestamps: true })
export class Event extends Document {
  @Prop({ required: true }) name: string;
  @Prop({ required: true }) condition: string;
  @Prop({ required: true }) startAt: Date;
  @Prop({ required: true }) endAt: Date;
  @Prop({ default: true }) isActive: boolean;
}
export const EventSchema = SchemaFactory.createForClass(Event);

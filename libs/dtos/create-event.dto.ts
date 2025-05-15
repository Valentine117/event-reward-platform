export class CreateEventDto {
  name: string;
  condition: string;
  startAt: Date;
  endAt: Date;
  isActive?: boolean;
}

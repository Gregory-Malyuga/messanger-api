import { Max, Min } from 'class-validator';

export class ChatCreateDto {
  @Min(3)
  @Max(255)
  name!: string;

  @Min(50)
  @Max(2000)
  description?: string;
}

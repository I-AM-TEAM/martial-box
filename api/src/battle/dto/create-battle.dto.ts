import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateBattleDto {
  @IsNotEmpty()
  @ApiProperty()
  redPlayerName: string;

  @IsNumber()
  @ApiProperty()
  redPlayerScore: number;

  @IsNotEmpty()
  @ApiProperty()
  bluePlayerName: string;

  @IsNumber()
  @ApiProperty()
  bluePlayerScore: number;
}

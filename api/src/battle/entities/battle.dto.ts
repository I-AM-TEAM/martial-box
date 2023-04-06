import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose, Transform } from 'class-transformer';

@Exclude()
export class ResponseBattle {
  @ApiProperty()
  @Expose()
  id: number;

  @ApiProperty()
  @Expose()
  redPlayerName: string;

  @ApiProperty()
  @Expose()
  bluePlayerName: string;

  @ApiProperty()
  @Expose()
  redScore: number;

  @ApiProperty()
  @Expose()
  blueScore: number;

  @ApiProperty()
  @Expose()
  @Transform(({ obj }) => {
    if (obj.redScore > obj.blueScore) return 'red';
    else if (obj.blueScore > obj.redScore) return 'blue';
    else return 'draw';
  })
  winner: string;
}

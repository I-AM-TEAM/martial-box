import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ResponsePlayer } from './entities/player.dto';
import { PlayersService } from './players.service';

@Controller('players')
@ApiTags('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Get('/top-rank')
  @ApiOkResponse({ type: [ResponsePlayer] })
  getPlayerTopRank() {
    return this.playersService.getPlayerTopRank();
  }
}

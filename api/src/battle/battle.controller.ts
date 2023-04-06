import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { BattleService } from './battle.service';
import { CreateBattleDto } from './dto/create-battle.dto';
import { ResponseBattle } from './entities/battle.dto';

@Controller('battle')
@ApiTags('battles')
export class BattleController {
  constructor(private battleService: BattleService) {}

  @Post('/')
  @HttpCode(HttpStatus.CREATED)
  @ApiBody({ type: CreateBattleDto })
  createBattle(@Body() createBattle: CreateBattleDto) {
    this.battleService.createBattle(createBattle);
  }

  @Get('/')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: [ResponseBattle] })
  findAll() {
    return this.battleService.findAll();
  }
}

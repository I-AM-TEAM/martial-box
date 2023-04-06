import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlayersController } from './players/players.controller';
import { PlayersService } from './players/players.service';
import { BattleController } from './battle/battle.controller';
import { BattleService } from './battle/battle.service';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [],
  controllers: [AppController, PlayersController, BattleController],
  providers: [AppService, PlayersService, BattleService, PrismaService],
})
export class AppModule {}

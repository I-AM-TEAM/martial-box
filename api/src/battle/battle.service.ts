import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { PlayersService } from '../players/players.service';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBattleDto } from './dto/create-battle.dto';
import { ResponseBattle } from './entities/battle.dto';

@Injectable()
export class BattleService {
  constructor(
    private prismaService: PrismaService,
    private playersService: PlayersService,
  ) {}

  async createBattle({
    bluePlayerName,
    bluePlayerScore,
    redPlayerName,
    redPlayerScore,
  }: CreateBattleDto) {
    const redPlayer = await this.playersService.findOneOrCreateByName(
      redPlayerName,
    );
    const bluePlayer = await this.playersService.findOneOrCreateByName(
      bluePlayerName,
    );

    if (redPlayer.highScore < redPlayerScore) {
      await this.prismaService.player.update({
        where: { id: redPlayer.id },
        data: { highScore: redPlayerScore },
      });
    }

    if (bluePlayer.highScore < bluePlayerScore) {
      await this.prismaService.player.update({
        where: { id: bluePlayer.id },
        data: { highScore: bluePlayerScore },
      });
    }
    await this.prismaService.battleLog.create({
      data: {
        blueScore: bluePlayerScore,
        redScore: redPlayerScore,
        bluePlayerId: bluePlayer.id,
        redPlayerId: redPlayer.id,
      },
    });
  }

  async findAll() {
    const battleLog = await this.prismaService.battleLog.findMany({
      orderBy: { createdAt: 'desc' },
      take: 4,
      include: {
        redPlayer: true,
        bluePlayer: true,
      },
    });

    const battleLogToBeResponsed = battleLog.map((log) => {
      return {
        ...log,
        bluePlayerName: log.bluePlayer.name,
        redPlayerName: log.redPlayer.name,
      };
    });
    console.log(plainToInstance(ResponseBattle, battleLogToBeResponsed));

    return plainToInstance(ResponseBattle, battleLogToBeResponsed);
  }
}

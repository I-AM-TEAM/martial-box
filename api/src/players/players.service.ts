import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { PrismaService } from '../prisma/prisma.service';
import { ResponsePlayer } from './entities/player.dto';

@Injectable()
export class PlayersService {
  constructor(private prismaService: PrismaService) {}

  async getPlayerTopRank() {
    const players = await this.prismaService.player.findMany({
      orderBy: { highScore: 'desc' },
      take: 3,
    });

    return plainToInstance(ResponsePlayer, players);
  }

  async findOneOrCreateByName(name: string) {
    const found = await this.prismaService.player.findUnique({
      where: { name },
    });
    if (!found) {
      const newUser = await this.prismaService.player.create({
        data: { name },
      });
      return plainToInstance(ResponsePlayer, newUser);
    }
    return plainToInstance(ResponsePlayer, found);
  }
}

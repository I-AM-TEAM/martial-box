'use client';

import useSWR from 'swr';
import { Battle } from '../src/api/Battle';
import Image from 'next/image';

enum WINNER {
  RED,
  BLUE,
  DRAW,
}

type Players = {
  red: {
    name: string;
    score: number;
  };
  blue: {
    name: string;
    score: number;
  };
};

type ScoreItemType = {
  winner: WINNER;
  players: Players;
};

function ScoreItem({
  winner = WINNER.RED,
  players = {
    red: {
      name: 'string1',
      score: 123,
    },
    blue: {
      name: 'string2',
      score: 123,
    },
  },
}: ScoreItemType) {
  return (
    <div
      id="score-item"
      className={`relative flex h-[92px] rounded-md shadow-md hover:scale-110 transition-transform`}
    >
      <div
        className={`relative w-[50%] h-full rounded-l-md flex justify-between items-center px-5 ${
          winner === WINNER.RED || winner === WINNER.DRAW
            ? 'bg-theme-red text-white'
            : 'bg-white text-[#AEAAAA]'
        }`}
      >
        {winner === WINNER.RED && (
          <p className="absolute top-3 left-5">WINNER</p>
        )}
        {winner === WINNER.DRAW && (
          <p className="absolute top-3 left-5">DRAW</p>
        )}
        <p className="text-u-name">{players.red.name}</p>
        <p className="text-win-score">{players.red.score}</p>
      </div>
      <div
        className={`relative w-[50%] h-full rounded-r-md flex justify-between items-center px-5 ${
          winner === WINNER.BLUE || winner === WINNER.DRAW
            ? 'bg-theme-blue text-white'
            : 'bg-white text-[#AEAAAA]'
        }`}
      >
        {winner === WINNER.BLUE && (
          <p className="absolute top-3 right-5">WINNER</p>
        )}
        {winner === WINNER.DRAW && (
          <p className="absolute top-3 right-5">DRAW</p>
        )}
        <p className="text-win-score">{players.blue.score}</p>
        <p className="text-u-name">{players.blue.name}</p>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 -translate-y-2">
        <Image src="/images/swords.png" alt="sword" width={32} height={32} />
      </div>
    </div>
  );
}

export function ScoreBoardItemList() {
  const battleApi = new Battle({ baseURL: process.env.NEXT_PUBLIC_API_URL });
  const { data: battleLog } = useSWR('/battles', () => {
    return battleApi
      .battleControllerFindAll()
      .then((response) => response.data);
  });

  const getEnumWinner = (winner: string) => {
    if (winner === 'RED') {
      return WINNER.RED;
    } else if (winner === 'BLUE') {
      return WINNER.BLUE;
    } else {
      return WINNER.DRAW;
    }
  };

  return (
    <>
      <div className="flex scoreboard-items-group h-auto flex-col items-center gap-4">
        {battleLog?.map((log) => {
          return (
            <ScoreItem
              key={log.id}
              winner={getEnumWinner(log.winner.toUpperCase())}
              players={{
                blue: {
                  name: log.bluePlayerName,
                  score: log.blueScore,
                },
                red: {
                  name: log.redPlayerName,
                  score: log.redScore,
                },
              }}
            />
          );
        })}
      </div>
    </>
  );
}

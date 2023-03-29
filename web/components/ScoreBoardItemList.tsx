'use client';

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
      className={`flex h-[92px] rounded-md shadow-md hover:scale-110 transition-transform`}
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
    </div>
  );
}

export function ScoreBoardItemList() {
  return (
    <>
      <div className="flex scoreboard-items-group h-auto flex-col items-center gap-4">
        <ScoreItem
          winner={WINNER.BLUE}
          players={{
            red: { name: 'string1', score: 56 },
            blue: { name: 'Lnwza007', score: 123 },
          }}
        />
        <ScoreItem
          winner={WINNER.DRAW}
          players={{
            red: { name: 'string1', score: 56 },
            blue: { name: 'Lnwza007', score: 123 },
          }}
        />
        <ScoreItem
          winner={WINNER.RED}
          players={{
            red: { name: 'string1', score: 56 },
            blue: { name: 'Lnwza007', score: 123 },
          }}
        />
        <ScoreItem
          winner={WINNER.BLUE}
          players={{
            red: { name: 'string1', score: 56 },
            blue: { name: 'Lnwza007', score: 123 },
          }}
        />
      </div>
    </>
  );
}

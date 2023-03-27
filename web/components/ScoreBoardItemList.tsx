'use client';

enum WINNER {
  RED,
  BLUE,
}

type ScoreItemType = {
  winner: WINNER;
};

function ScoreItem({ winner = WINNER.RED }: ScoreItemType) {
  return (
    <div id="score-item" className={`flex h-[92px] rounded-md shadow-md`}>
      <div
        className={`w-[50%] h-full rounded-l-md ${
          winner === WINNER.RED ? 'bg-theme-red' : 'bg-white'
        }`}
      ></div>
      <div
        className={`w-[50%] h-full rounded-r-md ${
          winner === WINNER.BLUE ? 'bg-theme-blue' : 'bg-white'
        }`}
      ></div>
    </div>
  );
}

export function ScoreBoardItemList() {
  return (
    <>
      <div className="flex scoreboard-items-group h-auto flex-col items-center gap-4">
        <ScoreItem winner={WINNER.BLUE} />
        <ScoreItem winner={WINNER.RED} />
        <ScoreItem winner={WINNER.RED} />
        <ScoreItem winner={WINNER.BLUE} />
      </div>
    </>
  );
}

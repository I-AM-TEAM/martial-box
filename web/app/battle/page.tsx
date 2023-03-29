'use client';
import { useEffect, useState } from 'react';
import { useCountdown } from 'usehooks-ts';
import { secondsToMinutes } from '../../src/utils/format';

type BattleScoreBarProps = {
  redScore: number;
  blueScore: number;
};

function BattleScoreBar({ redScore, blueScore }: BattleScoreBarProps) {
  const [redPercentage, setRedPercentage] = useState(50);
  const [bluePercentage, setBluePercentage] = useState(50);

  useEffect(() => {
    const totalScore = redScore + blueScore;

    if (totalScore === 0) {
      setRedPercentage(50);
      setBluePercentage(50);
      return;
    }

    setRedPercentage((redScore / totalScore) * 100);
    setBluePercentage((blueScore / totalScore) * 100);
  }, [redScore, blueScore]);

  return (
    <>
      <div className="w-[882px] h-[80px] rounded-md flex shadow-md">
        <div
          style={{ width: `${redPercentage}%` }}
          className="flex bg-theme-red h-full rounded-l-md items-center justify-center"
        >
          <p className="text-white text-lose-score">
            {redPercentage.toFixed(2)}%
          </p>
        </div>
        <div
          style={{ width: `${bluePercentage}%` }}
          className="flex bg-theme-blue h-full rounded-r-md items-center justify-center"
        >
          <p className="text-white text-lose-score">
            {bluePercentage.toFixed(2)}%
          </p>
        </div>
      </div>
    </>
  );
}

export default function BattlePage() {
  const [redScore, setRedScore] = useState(0);
  const [blueScore, setBlueScore] = useState(0);

  const [count, { startCountdown, resetCountdown }] = useCountdown({
    countStart: 180,
    intervalMs: 1000,
  });

  const [countStart, countStartFunc] = useCountdown({
    countStart: 5,
    intervalMs: 1000,
  });

  useEffect(() => {
    countStartFunc.startCountdown();

    return () => {
      resetCountdown();
      countStartFunc.resetCountdown();
    };
  }, []);

  useEffect(() => {
    if (countStart === 0) {
      startCountdown();
    }

    if (count === 0) {
      resetCountdown();
    }
  }, [count, countStart]);

  return (
    <>
      {countStart > 0 && (
        <div className="fixed w-full h-full bg-black/60 z-10 flex justify-center items-center">
          <p className="text-battle-score text-amber-300">{countStart}</p>
        </div>
      )}

      <div className="h-full flex flex-col items-center justify-between p-20">
        <BattleScoreBar redScore={redScore} blueScore={blueScore} />
        <div className="grid grid-cols-2 w-full">
          <div className="col-span-1 text-center">
            <h1 className="text-battle-score text-theme-red shadow-black drop-shadow-md">
              {redScore}
            </h1>
          </div>
          <div className="col-span-1 text-center">
            <p className="text-battle-score text-theme-blue shadow-black drop-shadow-md">
              {blueScore}
            </p>
          </div>
        </div>
        <p className="text-win-score text-black/60">
          {secondsToMinutes(count)}
        </p>
      </div>
    </>
  );
}

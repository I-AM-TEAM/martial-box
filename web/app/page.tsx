'use client';

import { useState } from 'react';
import { Button } from '../components/Button';
import { PreBattleForm } from '../components/PreBattleForm';
import { ScoreBoardItemList } from '../components/ScoreBoardItemList';
import { TopScore } from '../components/TopScore';

enum GameLevel {
  EASY,
  MEDIUM,
  HARD,
}

export default function Home() {
  const [open, setOpen] = useState(false);
  const [user1, setUser1] = useState('');
  const [user2, setUser2] = useState('');
  const [showMenu, setShowMenu] = useState(false);
  const [gameLevel, setGameLevel] = useState<GameLevel | null>();

  const onClose = () => {
    setOpen(false);
  };

  const onGameStart = (user1: string, user2: string) => {
    setUser1(user1);
    setUser2(user2);
    onClose();
  };

  const onClickOpenPreBattleGame = (level: GameLevel) => {
    setGameLevel(level);
    setOpen(true);
    setUser1('');
    setUser2('');
    setShowMenu(false);
  };

  const onStartButtonClicked = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <div className="relative h-full w-full flex">
      <p className="absolute p-10 text-btn text-theme-btn-text">Score board</p>
      <div className="flex flex-col h-full w-full justify-center items-center gap-16">
        <TopScore />
        <ScoreBoardItemList />
      </div>
      <PreBattleForm open={open} onClose={onClose} onGameStart={onGameStart} />
      <div className="fixed bottom-0 ml-8 mb-8 flex flex-col gap-3">
        {showMenu && (
          <>
            <Button
              label="ยาก"
              onClick={() => {
                onClickOpenPreBattleGame(GameLevel.HARD);
              }}
            />
            <Button
              label="ปานกลาง"
              onClick={() => {
                onClickOpenPreBattleGame(GameLevel.MEDIUM);
              }}
            />
            <Button
              label="ง่าย"
              onClick={() => {
                onClickOpenPreBattleGame(GameLevel.EASY);
              }}
            />
          </>
        )}
        <Button label="เริ่มเกม" onClick={onStartButtonClicked} />
      </div>
    </div>
  );
}

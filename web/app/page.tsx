'use client';

import { useState } from 'react';
import { PreBattleForm } from '../components/PreBattleForm';

export default function Home() {
  const [open, setOpen] = useState(false);
  const [user1, setUser1] = useState('');
  const [user2, setUser2] = useState('');

  const onClose = () => {
    setOpen(false);
  };

  const onGameStart = (user1: string, user2: string) => {
    setUser1(user1);
    setUser2(user2);
    onClose();
  };

  return (
    <div className="h-full w-full flex">
      <button
        type="button"
        className="text-btn text-theme-btn-text justify-self-center mx-auto"
        onClick={() => {
          setOpen(true);
        }}
      >
        Test
      </button>
      <PreBattleForm open={open} onClose={onClose} onGameStart={onGameStart} />
    </div>
  );
}

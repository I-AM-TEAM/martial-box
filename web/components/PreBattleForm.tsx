'use client';

import { useForm } from 'react-hook-form';

type PreBattleFormProps = {
  open: boolean;
  onClose: () => void;
  onGameStart: (user1: string, user2: string) => void;
};

type PreBattleFormType = {
  user1: string;
  user2: string;
};

export function PreBattleForm({
  onGameStart,
  onClose,
  open = false,
}: PreBattleFormProps) {
  const { register, handleSubmit } = useForm();

  const onSubmit = (rawData: any) => {
    const data = rawData as PreBattleFormType;
    onGameStart(data.user1, data.user2);
  };

  const onError = (error: any) => {
    console.log(error);
    alert('กรุณากรอกข้อมูลให้ครบ');
  };

  return (
    <>
      {open && (
        <div className="fixed w-full h-full flex bg-black/40">
          <form onSubmit={handleSubmit(onSubmit, onError)}>
            <div className="z-10 absolute w-[1164px] h-[690px] grid grid-cols-2 top-0 left-[50%] -translate-x-[50%] translate-y-[30%]">
              <div className="col-span-1 bg-theme-red flex justify-center items-center">
                <input
                  {...register('user1', { required: true })}
                  type="text"
                  placeholder="กรอกชื่อ"
                  className="p-4 rounded-md w-[311px] h-[68px] text-p1"
                />
              </div>
              <div className="col-span-1 bg-theme-blue flex justify-center items-center">
                <input
                  type="text"
                  {...register('user2', { required: true })}
                  placeholder="กรอกชื่อ"
                  className="p-4 rounded-md w-[311px] h-[68px] text-p1"
                />
              </div>
              <span
                className="absolute text-white text-2xl top-0 right-0 p-4 cursor-pointer"
                onClick={onClose}
              >
                X
              </span>
              <p className="absolute top-0 right-[50%] translate-x-[50%] mt-16 text-h1 text-white">
                ระดับความยาก: ยาก
              </p>
              <button
                type="submit"
                className="absolute bottom-0 right-[50%] translate-x-[50%] mb-16 text-btn text-theme-btn-text bg-theme-btn rounded-md w-[232px] h-[82px]"
              >
                เริ่มเกม
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

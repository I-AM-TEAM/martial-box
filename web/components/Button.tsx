'use client';

type ButtonType = {
  label: string;
  submit?: boolean;
  onClick?: () => void;
  className?: string;
};

export function Button({
  label,
  submit = false,
  onClick,
  className,
}: ButtonType) {
  return (
    <>
      <button
        type={submit ? 'submit' : 'button'}
        onClick={onClick}
        className={
          (className ? className + ' ' : '') +
          'text-btn text-theme-btn-text bg-theme-btn rounded-md w-[232px] h-[82px] shadow-lg hover:border-theme-blue hover:border-4'
        }
      >
        {label}
      </button>
    </>
  );
}

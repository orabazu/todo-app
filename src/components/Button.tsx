import React from 'react';

export enum ButtonColor {
  Primary = 'text-indigo-600 border-indigo-600 hover:bg-indigo-600',
  Secondary = 'text-gray-500 border-gray-500 hover:bg-gray-500',
  Success = 'text-green-500 border-green-500 hover:bg-green-500',
  Warning = 'text-red-500 border-red-500 hover:bg-red-500',
}

type Props = {
  onClick?: () => void;
  color?: ButtonColor;
  isDisabled?: boolean;
};

const Button: React.FC<Props> = ({
  children,
  onClick,
  color = ButtonColor.Primary,
  isDisabled,
}): JSX.Element => {
  const disableClass = isDisabled ? 'disabled:opacity-50' : '';
  return (
    <button
      onClick={onClick}
      className={`flex-no-shrink w-32 p-2 ml-4 p-2 border-2 rounded hover:text-white ${color} ${disableClass}`}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default Button;

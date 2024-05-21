import React, { ReactNode, FC } from "react";

interface ButtonTypes {
  text?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
  icon?: ReactNode;
}

export const CustomBtn: FC<ButtonTypes> = ({
  text,
  icon,
  onClick,
  className,
}) => {
  return (
    <button
      className={`border text-center rounded-md h-[50px] ${className}`}
      onClick={() => onClick}
    >
      <span className=" flex justify-center items-center gap-3">
        <p>{icon}</p>
        <h6>{text}</h6>
      </span>
    </button>
  );
};

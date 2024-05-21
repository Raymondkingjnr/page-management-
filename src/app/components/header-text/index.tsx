import React, { FC } from "react";

interface HeaderText {
  className?: string;
  title?: string;
  text?: string;
}

const HeaderText: FC<HeaderText> = ({ className, text, title }) => {
  return (
    <div className={`${className} flex flex-col gap-6 text-balance`}>
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
};

export default HeaderText;

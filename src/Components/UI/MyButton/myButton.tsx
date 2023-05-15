import React, { FC, PropsWithChildren } from "react";
import s from "./myButton.module.scss";
interface MyButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  value?: string;
}
const MyButton: FC<PropsWithChildren<MyButtonProps>> = ({
  children,
  ...props
}) => {
  return (
    <button className={s.button} {...props}>
      {children}
    </button>
  );
};

export default MyButton;

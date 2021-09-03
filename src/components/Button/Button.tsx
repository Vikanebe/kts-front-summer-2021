import React from "react";

import "./Button.css";

export type ButtonProps = {
  onClick?: (e: React.MouseEvent) => void;
  children: React.ReactNode;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  disabled,
}): JSX.Element => (
  <button onClick={onClick} disabled={disabled} className="button">
    {children}
  </button>
);

export default React.memo(Button);

import React from "react";

import { Button } from "antd";
import "antd/dist/antd.css";

type ButtonT = {
  onClick?: () => void;
  children: string;
};

const ButtonC = ({ onClick, children }: ButtonT): JSX.Element => (
  <Button type="primary" onClick={onClick}>
    {children}
  </Button>
);

export default ButtonC;

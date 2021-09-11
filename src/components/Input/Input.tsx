import React from "react";

import "./Input.scss";

type InputProps = {
  placeholder?: string;
  value: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  onChange,
}): JSX.Element => (
  <input
    className="input"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);

export default React.memo(Input);

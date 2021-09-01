import React from "react";

import "./Avatar.css";

export type AvatarProps = {
  src?: string;
  alt?: string;
  letter?: string;
};

const Avatar: React.FC<AvatarProps> = ({ src, alt, letter }): JSX.Element => (
  <div className="avatar">
    {src ? <img src={src} alt={alt} /> : `${letter}`}
  </div>
);

export default Avatar;

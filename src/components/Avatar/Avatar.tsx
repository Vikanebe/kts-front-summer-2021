import React from "react";

import "./Avatar.scss";

export type AvatarProps = {
  src?: string;
  alt?: string;
  letter?: string;
};

const Avatar: React.FC<AvatarProps> = ({ src, alt, letter }): JSX.Element => (
  <div className="avatar">
    {src ? <img src={src} alt={alt} className="avatar_img" /> : `${letter}`}
  </div>
);

export default React.memo(Avatar);

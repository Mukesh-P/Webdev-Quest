import { useState } from 'react';
import './Avatar.css';

const AvatarGroup = ({ children, ...rest }) => {
  return <div className="avatar-group" {...rest}>{children}</div>;
};

export const Avatar = ({ src, alt, initials, size, ...rest }) => {
  const [imgFailed, setImgFailed] = useState(false);

  const showImage = src && !imgFailed;

  const classes = [
    'avatar',
    !showImage ? 'avatar-initials' : '',
    size ? `avatar-${size}` : '',
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} {...rest}>
      {showImage
        ? <img src={src} alt={alt} onError={() => setImgFailed(true)} />
        : <span>{initials}</span>
      }
    </div>
  );
};

Avatar.Group = AvatarGroup;

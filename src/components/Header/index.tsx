import * as React from 'react';

import './header.scss';

type NavBtn = {
  name: string;
  icon: string;
  action: () => void;
};

export default ({
  btnLeft,
  title,
  btnRight,
}: {
  btnLeft?: NavBtn;
  title: string;
  btnRight?: NavBtn;
}) => {
  return (
    <nav className="ac-header">
      {btnLeft !== undefined ? (
        <a onClick={btnLeft.action}>
          <img src={btnLeft.icon} alt={btnLeft.name} />
        </a>
      ) : (
        <div />
      )}
      <h1>{title}</h1>
      {btnRight !== undefined ? (
        <a onClick={btnRight.action}>
          <img src={btnRight.icon} alt={btnRight.name} />
        </a>
      ) : (
        <div />
      )}
    </nav>
  );
};

import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header>
      <h1>
        <span className="secondary">Luke</span> Osgood
      </h1>
      <h2>
        <span className="secondary">Web</span> Developer
      </h2>
    </header>
  );
};

Header.displayName = 'Header';

export default Header;

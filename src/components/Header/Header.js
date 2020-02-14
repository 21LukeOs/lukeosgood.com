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
      <a
      href='https://github.com/21LukeOs/lukeosgood.com'
      target="_blank"
      rel="noopener noreferrer"
      className='the-code'
      >
        <p className='the-code'>(https://github.com/21LukeOs/lukeosgood.com)</p>
      </a>
    </header>
  );
};

Header.displayName = 'Header';

export default Header;

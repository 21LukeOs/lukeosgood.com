import React from 'react';
import extLink from '../../assets/external-link.svg';
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
      className='the-code-link'
      >
        <p className='the-code'><img src={extLink} alt='external link' /> The Code</p>
      </a>
    </header>
  );
};

Header.displayName = 'Header';

export default Header;

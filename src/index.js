import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Open Sans', 'Roboto']
  }
});

ReactDOM.render(<App />, document.getElementById('root'));

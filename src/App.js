import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';

function App() {
  return (
    <div className='container'>
      <Header />
      <Education />
      <Experience />
    </div>
  );
}

export default App;

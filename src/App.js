import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Hello from './components/Hello/Hello';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Interests from './components/Interests/Interests';

function App() {
  return (
    <div className='container'>
      <Header />
      <Hello />
      <Education />
      <Experience />
      <Interests />
    </div>
  );
}

export default App;

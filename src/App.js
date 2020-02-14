import React from 'react';
import './App.scss';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';

function App() {
  return (
    <div className='container'>
      <Education />
      <Experience />
    </div>
  );
}

export default App;

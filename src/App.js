import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Hello from './components/Hello/Hello';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Interests from './components/Interests/Interests';
import References from './components/References/References';

function App() {
  return (
    <div className='container'>
      <Header />
      <Hello />
      <Projects />
      <Education />
      <Experience />
      <Interests />
      <References />
    </div>
  );
}

export default App;

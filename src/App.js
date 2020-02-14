import React, { useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Hello from './components/Hello/Hello';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Interests from './components/Interests/Interests';
import References from './components/References/References';
import SayHello from './components/SayHello/SayHello';
import Skills from './components/Skills/Skills';

function App() {
  const [isPrintMode, setIsPrintMode] = useState(false);

	//works best in chrome, mostly for personal use
	window.onbeforeprint = () => setIsPrintMode(true);
	window.onafterprint = () => setIsPrintMode(false);

  return (
    <div className='container'>
      <Header />
      <Hello />
      <Projects />
      <Experience />
      <SayHello showPrivateDetails={isPrintMode} />
      <Skills />
      <Education />
      <Interests />
      <References />
    </div>
  );
}

export default App;

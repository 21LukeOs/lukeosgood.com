import React, { useState } from 'react';
import Header from './components/Header/Header';
import Hello from './components/Hello/Hello';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Interests from './components/Interests/Interests';
import References from './components/References/References';
import SayHello from './components/SayHello/SayHello';
import Skills from './components/Skills/Skills';
import './App.scss';

function App() {
  const [isPrintMode, setIsPrintMode] = useState(false);

	//works best in chrome, mostly for personal use
	window.onbeforeprint = () => setIsPrintMode(true);
	window.onafterprint = () => setIsPrintMode(false);

  return (
    <div className='container'>
			<div className='container__header'>
				<Header />
			</div>
			<div className='container__body'>
				<div>
					<Hello />
					<Projects addBreak={isPrintMode} />
					<Experience />
				</div>
				{isPrintMode && <div className='container__body__divider'></div>}
				<div>
					<SayHello showPrivateDetails={isPrintMode} />
					<Skills />
					<Education />
					<Interests />
					<References />
				</div>
			</div>
		</div>
  );
}

export default App;

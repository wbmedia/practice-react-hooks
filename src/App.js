import React, { useState } from 'react';
import MyComponent from './reactEffects'
import ApiExample from './ApiExemple'

import logo from './logo.svg';
import './App.css';

function MemberSection() {
	return (
		<div>
			<p>Welecome to member's section</p>
		</div>
	);
}

function Objectos() {
  const [clicks, setClicks] = useState(0);
  const [title, setTitle] = useState('');



  const addClicks = () => {
    setClicks(clicks + 1)
  }

  const removeClicks = () => {
    setClicks(clicks - 1)
  }

  const handleInput = (e) => {
    setTitle(e.target.value )
  }  

  return (
    <div>
      <h3> {title}</h3>
      <input className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" onChange={handleInput} value={title} />
      <p>{clicks}</p>
      <button className="App-button-count" onClick={addClicks}>+</button>
      <button className="App-button-count" onClick={removeClicks}>-</button>
    </div>
    )
}

function App() {
	const [isActive, setActive] = useState(false);

	const toggle = () => {
		setActive(!isActive);
	};

	return (
		<div className="App">
			<header className="App-header">
        <ApiExample />
        <p>Simple Hooks App</p>
        {<Objectos />}
				{isActive && <MemberSection />}
				<button
					className="App-button"
					style={{ marginTop: '1em' }}
					onClick={toggle}
				>
					{isActive ? 'Desctivar' : 'Activar'}
        </button>
        
        <MyComponent />
			</header>
		</div>
	);
}

export default App;

import React, { useState, useContext, useRef } from 'react';

const MyContext = React.createContext();

// Context de manera tradicional
// const Nieto = () => (
// 	<MyContext.Consumer>
// 		{(context) => (
// 			<div>
//         <p>Soy Nieto {context.num}</p>
//         <button className="App-button" onClick={context.addNum}>
//           Nieto Dispatcher 🔰
//         </button>
// 			</div>
// 		)}
// 	</MyContext.Consumer>
// );

const Nieto = () => {
	const { num, addNum } = useContext(MyContext);
	return (
		<div>
			<p>Soy Nieto {num}</p>
			<button className="App-button" onClick={addNum}>
				Nieto Dispatcher 🔰
			</button>
		</div>
	);
};

const Hijo = () => (
	<div>
		<p>Soy Hijo</p>
		<Nieto />
	</div>
);

function MyComponentWithContext() {
  const entrada = useRef();
  
  const focus = () => entrada.current.focus();
  const blur = () => entrada.current.blur();

	const [num, setNum] = useState(0);

	const addNum = () => {
		setNum(num + 1);
	};

	return (
		<MyContext.Provider
			value={{
				num,
				addNum,
			}}
		>
			<div style={{padding: '10px'}}>
				<input type="text" placeholder="Ingresa tu texto" ref={entrada} />
				<h4>Conetex React: {num}</h4>
				<button className="App-button" onClick={addNum}>
					Click with Context
        </button>
        
        <button className="App-button" onClick={focus}>
					Focus
        </button>
        
        <button className="App-button" onClick={blur}>
					Blur
				</button>

				<button className="App-button" onClick={() => console.log(entrada)}>
					Focus
				</button>
				<Hijo />
			</div>
		</MyContext.Provider>
	);
}

export default MyComponentWithContext;

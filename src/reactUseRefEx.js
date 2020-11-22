import React, { useState, useRef, useEffect } from 'react';

function ReactUseRefEx() {
	const [name, setName] = useState('');
	const [products, setProducts] = useState([]);

	const entrada = useRef();

	const handleInput = (e) => {
		setName(e.target.value);
	};

	useEffect(() => {
		// debounce
		setTimeout(() => {
			if (name === entrada.current.value) {
				// Http Request
				fetch(
					'https://universidad-react-api-test.luxfenix.now.sh/products?name=' +
						name
				)
					.then((res) => res.json())
					.then((data) => setProducts(data.products))
					.catch((error) => console.error(error));
			}
		}, 1000);
	}, [name]);

	return (
		<div>
			<p>Texto - {name}</p>
			<input
				type="text"
				placeholder="Ingresa tu Texto"
				onChange={handleInput}
				ref={entrada}
			/>
			<ul>
				{products.map((product) => (
					<li key={product.id}>{product.name}</li>
				))}
			</ul>
		</div>
	);
}

export default ReactUseRefEx;

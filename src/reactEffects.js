import React, { useEffect, useState } from 'react';

function MyComponent() {

  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)
  const [num, setNum] = useState(0)
  const [emoji, setEmoji] = useState('🏯 ')

  const addNum = () => {
    setNum(num +1)
  }

  const toggleEmoji = () => {
    const nextEmoji = emoji === '🏯 ' ? '👺 ' : '🏯'
    setEmoji(nextEmoji)
  }
  
  const handleMove = (e) => {
    setMouseX(e.clientX)
    setMouseY(e.clientY)
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMove)

    return () => {
      // componentWillUnmount
      window.removeEventListener('mousemove', handleMove)
    }
  }, [emoji, num])


	return (
		<div style={{padding: '2em'}}>
       <h2>X {mouseX} Y: {mouseY}</h2>

       <button className="App-button" onClick={toggleEmoji}>
        Emoji Alternate
       </button>

       <h1>{emoji}</h1>

       <button className="App-button" onClick={addNum}>
        ADD ({num})
       </button>
		</div>
	);
}
export default MyComponent;

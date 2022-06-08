import { useState } from 'react'

function App() {
	const [count, setCount] = useState(0)
	return (
		<div className="App">
			<h1>Hello, Monday Music project</h1>

			<h1>{count}</h1>
			<button className="button" onClick={() => setCount(count + 1)}>
				+
			</button>
		</div>
	)
}

export default App

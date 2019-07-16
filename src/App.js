import React from 'react'
import './App.css'

import Single from './Single'
import Multiple from './Multiple'

function App() {
	return (
		<>
			<h1>Single File Upload</h1>
			<div className="single-file-input">
				<Single />
			</div>
			<h1>Multiple File Upload</h1>
			<div className="multiple-file-input">
				<Multiple />
			</div>
		</>
	)
}

export default App

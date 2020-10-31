import React from 'react'
import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from '../NavBar/NavBar'
import Landing from '../Landing/Landing'

function App() {
	return (
		<div className='App'>
			<NavBar />
            <Landing />
			<h3 id='aboutme'>About Me</h3>
			<h3 id='projects'>Projects</h3>
			<h3 id='contact'>Contact</h3>
		</div>
	)
}

export default App

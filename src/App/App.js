import React from 'react'
import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from '../NavBar/NavBar'
import Landing from '../Landing/Landing'
import About from '../About/About'
import Projects from '../Projects/Projects'

function App() {
	return (
		<div className='App'>
			<NavBar />
			<Landing />
			<About />
			<h3 id='projects'>Projects</h3>
			<Projects />
			<h3 id='contact'>Contact</h3>
		</div>
	)
}

export default App

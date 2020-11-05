import React from 'react'
import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from '../NavBar/NavBar'
import Landing from '../Landing/Landing'
import About from '../About/About'
import Projects from '../Projects/Projects'
import Footer from '../Footer/Footer'
import Contact from '../Contact/Contact'

function App() {
	return (
		<div className='App'>
			<NavBar />
			<Landing />
			<h3 id='aboutme'>About Me</h3>
			<About />
			<h3 id='projects'>Projects</h3>
			<Projects />
			<Contact />
			<Footer />
		</div>
	)
}

export default App

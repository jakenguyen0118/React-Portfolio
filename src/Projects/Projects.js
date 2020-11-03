import React, { useState, useEffect } from 'react'
import './projects.scss'
import Tabletop from 'tabletop'

const Projects = () => {
	const [projects, setProjects] = useState([])

	useEffect(() => {
		Tabletop.init({
			key: '1NUz3xAaj60S4UdbK6UiLyBjoKhFrcFo-Opa-6nTcOmQ',
			simpleSheet: true,
		})
			.then((data) => setProjects(data))
			.catch((err) => console.warn(err))
	}, [])

	let project = projects.map((project, index) => {
		const handleRepoClick = () => {
			let url = project.Repo
			window.open(url, '_blank')
		}

		const handleLiveClick = () => {
			let url = project.Link
			window.open(url, '_blank')
		}
		return (
			<>
				<div className='project' key={index}>
					<h4>{project.Title}</h4>
					<img src={project.Image} alt='' />
					<p>{project.Description}</p>
					<div>
						<button onClick={handleLiveClick}>Live App</button>
						<button onClick={handleRepoClick}>Repo</button>
					</div>
				</div>
			</>
		)
	})

	return <div className='projects-container'>{project}</div>
}

export default Projects

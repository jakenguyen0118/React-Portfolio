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
		return (
			<div
				className='project'
				style={{ backgroundImage: `url(${project.Image})` }}>
				{/* <h5>{project.Title}</h5>
                <p>{project.Description}</p> */}
			</div>
		)
	})

	return (
		<div className='projects-container'>
			{project}
		</div>
	)
}

export default Projects

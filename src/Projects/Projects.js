import React, { useState, useEffect } from 'react'
import './projects.scss'
import Tabletop from 'tabletop'
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'

const Projects = () => {
	const [projects, setProjects] = useState([])
	const [selectedId, setSelectedId] = useState(null)

	useEffect(() => {
		Tabletop.init({
			key: '1NUz3xAaj60S4UdbK6UiLyBjoKhFrcFo-Opa-6nTcOmQ',
			simpleSheet: true,
		})
			.then((data) => setProjects(data))
			.catch((err) => console.warn(err))
	}, [])

	// let project = projects.map((project, index) => {
	// 	return (
	// 		<div
	// 			className='project'
	// 			style={{ backgroundImage: `url(${project.Image})` }}>
	// 			{/* <h5>{project.Title}</h5>
	//             <p>{project.Description}</p> */}
	// 		</div>
	// 	)
	// })

	return (
		<div className='projects-container'>
			<AnimateSharedLayout type='crossfade'>
				{projects.map((project) => (
					<motion.div
						className='project'
						layoutId={project.id}
						style={{ backgroundImage: `url(${project.Image})` }}
						onClick={() => setSelectedId(project.id)}>
						{/* <motion.h5>{project.Title}</motion.h5>
						<motion.p>{project.Description}</motion.p> */}
					</motion.div>
				))}
			</AnimateSharedLayout>
		</div>
	)
}

export default Projects

import React from 'react'
import './about.scss'
import { Icon, InlineIcon } from '@iconify/react'
import mongodbIcon from '@iconify/icons-logos/mongodb'
import languageRubyOnRails from '@iconify/icons-mdi/language-ruby-on-rails'
import postgresqlIcon from '@iconify/icons-logos/postgresql'

const About = () => {
	return (
		<>
			<div className='about-me'>
				<h3 id='aboutme'>About Me</h3>
				<div className='jake'></div>
				<div className='skills'>
					<div>
						<i class='fab fa-react fa-3x'></i>
						<p>React</p>
					</div>
					<div>
						<i class='fab fa-js-square fa-3x'></i>
						<p>JavaScript</p>
					</div>
					<div>
						<i class='fab fa-node-js fa-3x'></i>
						<p>Node.js</p>
					</div>
					<div>
						<Icon icon={mongodbIcon} font-size='3em' />
                        <p>MongoDB</p>
					</div>
					<div>
						<Icon icon={languageRubyOnRails} font-size='3em' />
						<p>Ruby on Rails</p>
					</div>
					<div>
						<Icon icon={postgresqlIcon} font-size='3em' />
						<p>PostgreSQL</p>
					</div>
					<div>
						<i class='fab fa-sass fa-3x'></i>
						<p>Sass</p>
					</div>
					<div>
						<i class='fab fa-bootstrap fa-3x'></i>
						<p>Bootstrap</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default About

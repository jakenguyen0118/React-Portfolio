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
				<div className='jake'>
					<div className='pic'>
						<img src='https://i.imgur.com/uCzjr9m.jpg' alt='about pic' />
					</div>
					<div className='jake-about'>
						<div className='brand-statement'>
							<p className='about-title'>Brand Statement</p>
							<div className='about-hover'>
								<p>
									Fast-learning, motivated software engineer with strong
									analytical skills to problem solve with a creative approach. I
									love styling to fit and match my simplicity and minimalist
									preferences.
								</p>
							</div>
						</div>
						<div className='location'>
							<p className='about-title'>Location</p>
							<div className='about-hover'>
								<p>Boston, MA</p>
							</div>
						</div>
						<div className='hobbies'>
							<p className='about-title'>Hobbies</p>
							<div className='about-hover'>
								<p>Video games, FOOD, Netflix</p>
							</div>
						</div>
						<div className='education'>
							<p className='about-title'>Education</p>
							<div className='about-hover'>
								<img
									src='https://lh3.googleusercontent.com/proxy/LMJ90-uhi6msQebz2HUjA08IdFVSa3BCxeR1E6PuO7EFikGK0JnF_YAqf1Ywmc_YkzIrG9a6zG1QiTRZlhhgVKfV0YAfm1zXMeRULyN54kPmcFYi8pubT8uxuR3ntCu-9s8'
									alt='ga icon'
								/>
								<p>Software Engineering</p>
							</div>
						</div>
					</div>
				</div>
				<div className='skills'>
					<div>
						<i className='fab fa-react fa-2x'></i>
						<p>React</p>
					</div>
					<div>
						<i className='fab fa-js-square fa-2x'></i>
						<p>Javascript</p>
					</div>
					<div>
						<i className='fab fa-node-js fa-2x'></i>
						<p>Node.js</p>
					</div>
					<div>
						<Icon icon={mongodbIcon} fontSize='2em' />
						<p>MongoDB</p>
					</div>
					<div>
						<Icon icon={languageRubyOnRails} fontSize='2em' />
						<p>Ruby on Rails</p>
					</div>
					<div>
						<Icon icon={postgresqlIcon} fontSize='2em' />
						<p>PostgreSQL</p>
					</div>
					<div>
						<i className='fab fa-sass fa-2x'></i>
						<p>Sass</p>
					</div>
					<div>
						<i className='fab fa-bootstrap fa-2x'></i>
						<p>Bootstrap</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default About

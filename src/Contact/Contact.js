import React from 'react'
import './contact.scss'

const Contact = () => {
	return (
		<div className='contact-section'>
			<form>
				<h3 id='contact'>Contact Me</h3>
				<div>
					<input
						placeholder='Full Name'
						type='text'
						name='name'
						id='name'
						required='required'
					/>
				</div>
				<div>
					<input
						placeholder='Email'
						type='text'
						name='name'
						id='email'
						required='required'
					/>
				</div>
				<div>
					<textarea
						placeholder='Leave Your Message Here'
						name='comments'
						id='comments'
						rows='5'
						cols='80'
					/>
				</div>
				<button type='submit' className='submit'>
					SUBMIT
				</button>
			</form>
			<div className='contact-me'>
				<h3>Contact Information</h3>
				<div className='my-info'>
					<p>
						<i class='fas fa-map-marker-alt'></i>Boston, MA
					</p>
					<p>
						<i class='fas fa-phone'></i>(781)502-6486
					</p>
					<p>
						<i class='far fa-envelope'></i>jakenguyen0118@gmail.com
					</p>
					<div>
						<a
							href='https://github.com/jakenguyen0118'
							target='_blank'
							rel='noreferrer'>
							<i className='fab fa-github fa-2x'></i>
						</a>
						<a
							href='https://www.linkedin.com/in/jakenguyen0118/'
							target='_blank'
							rel='noreferrer'>
							<i className='fab fa-linkedin-in fa-2x'></i>
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact

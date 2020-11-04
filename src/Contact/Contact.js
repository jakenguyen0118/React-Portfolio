import React, { useState } from 'react'
import './contact.scss'

const Contact = () => {
    const [formData, setFormData] = useState({})

	const handleInput = (e) => {
		const copyFormData = { ...formData }
		copyFormData[e.target.name] = e.target.value
		setFormData(copyFormData)
    }

    const sendData = async (e) => {
        e.preventDefault()
        alert('Thank you for reaching out! I will get back to you as soon as I can!')
        const { name, email, message } = formData
        try {
            const response = await fetch(
                'https://v1.nocodeapi.com/jakenguyen/google_sheets/yYjrkLITpWxhLqFC?tabId=Sheet1',
                {
                    method: 'post',
                    body: JSON.stringify([[name, email, message]]),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            )
            const json = await response.json()
            console.log('Success:', JSON.stringify(json))
        } catch (error) {
            console.error('Error:', error)
        }
    }

	return (
		<div className='contact-section'>
			<form onSubmit={sendData}>
				<h3 id='contact'>Contact Me</h3>
				<div>
					<input
						placeholder='Full Name'
						type='text'
						name='name'
						id='name'
						required='required'
						onChange={handleInput}
					/>
				</div>
				<div>
					<input
						placeholder='Email'
						type='text'
						name='email'
						id='email'
						required='required'
						onChange={handleInput}
					/>
				</div>
				<div>
					<textarea
						placeholder='Leave Your Message Here'
						name='message'
						id='comments'
						rows='5'
						cols='80'
						onChange={handleInput}
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

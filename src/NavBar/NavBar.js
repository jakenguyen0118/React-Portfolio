import React, { useState } from 'react'
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
} from 'reactstrap'
import './navbar.scss'

const NavBar = () => {
	// utilized Reactstrap for navbar
	const [collapsed, setCollapsed] = useState(true)

	const toggleNavbar = () => setCollapsed(!collapsed)

	return (
		<>
			<Navbar color='faded' light sticky='top' expand='md'>
				<NavbarBrand href='/' className='mr-auto'>
					<h4>
						Jake Nguyen <span>// Full Stack Developer</span>{' '}
					</h4>
				</NavbarBrand>
				<NavbarToggler onClick={toggleNavbar} className='mr-2' />
				<Collapse isOpen={!collapsed} navbar>
					<Nav className='ml-auto' navbar>
						<NavItem>
							<NavLink href='#home' onClick={toggleNavbar}>
								<b className='home-nav'>Home</b>&nbsp;
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href='#aboutme' onClick={toggleNavbar}>
								<b>About</b>&nbsp;
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href='#projects' onClick={toggleNavbar}>
								<b>Projects</b>&nbsp;
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href='#contact' onClick={toggleNavbar}>
								<b>Contact</b>&nbsp;
							</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</>
	)
}

export default NavBar

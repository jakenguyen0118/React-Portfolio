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

const NavBar = () => {
	// utilized Reactstrap for navbar
	const [collapsed, setCollapsed] = useState(true)

	const toggleNavbar = () => setCollapsed(!collapsed)

	return (
		<>
			<Navbar
				color='faded'
				light
				className='color-nav'
				sticky='top'
				expand='lg'>
				<NavbarBrand href='/' className='mr-auto'>
                    <h3>Jake Nguyen <span>// Full Stack Developer</span> </h3>
				</NavbarBrand>
				<NavbarToggler onClick={toggleNavbar} className='mr-2' />
				<Collapse isOpen={!collapsed} navbar>
					<Nav navbar>
						<NavItem>
							<NavLink href='#'>
								<b>Home</b>&nbsp;
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href='#'>
								<b>About</b>&nbsp;
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href='#'>
								<b>Projects</b>&nbsp;
							</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</>
	)
}

export default NavBar

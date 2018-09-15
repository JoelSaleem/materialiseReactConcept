import React from 'react';
import { Navbar, NavItem } from 'react-materialize';
// import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div>
			<Navbar
				brand="React Materialise Concept"
				className="nav-extended light-blue lighten-1"
				right
			>
				<NavItem href="/carouselPage">Carousel</NavItem>
				<NavItem>Tech Stack</NavItem>
				<NavItem>Contact Me</NavItem>
			</Navbar>
		</div>
	);
};

export default Header;

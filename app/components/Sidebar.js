import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import Footer from './Footer';

class Sidebar extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
			<section className="sidebar">
				<Logo />
				<Navigation />
				<Footer />
			</section>
		);
	}
}

export default Sidebar;

import React from 'react';
import { Link } from 'react-router';

class Logo extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
			<div className="logo">
				<Link to="/">
					<h1><span className="first-word">Project</span> <span className="second-word">Malawi</span></h1>
				</Link>
			</div>
		);
	}
}

export default Logo;

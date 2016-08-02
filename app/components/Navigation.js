import React from 'react';
import { Link } from 'react-router';

class Navigation extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
			<nav className="navigation">
				<ul>
					<li>
						<Link to="/overview">
							An Overview
						</Link>
					</li>
					<li>
						<Link to="/conservation">
							Conservation, Sustainability and the Environment
						</Link>
					</li>
					<li>
						<Link to="/health">
							Healthcare and HIV/AIDS
						</Link>
					</li>
					<li>
						<Link to="/economy">
							The Economy
						</Link>
					</li>
				</ul>
			</nav>
		);
	}
}

export default Navigation;

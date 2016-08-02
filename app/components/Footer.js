import React from 'react';
import Donate from './Donate';

class Footer extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
			<footer className="footer">
				<Donate />
			</footer>
		);
	}
}

export default Footer;

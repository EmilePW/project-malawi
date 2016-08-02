import React from 'react';

class Donate extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
			<a href="http://www.villagereach.org/" target="_blank">
				<button className="donate">Donate</button>
			</a>
		);
	}
}

export default Donate;

import React from 'react';

class Donate extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
			<a href="https://www.justgiving.com/ruxandrapopescu" target="_blank">
				<button className="donate">Donate</button>
			</a>
		);
	}
}

export default Donate;

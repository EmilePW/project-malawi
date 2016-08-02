import React from 'react';

class Main extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
			<section className="main-content">
				{this.props.children}
			</section>
		);
	}
}

export default Main;

import React from 'react';
import Sidebar from './Sidebar';
import Main from './Main';

class Wrapper extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
			<div>
				<Sidebar/>
				<Main/>
			</div>
		);
	}
}

export default Wrapper;

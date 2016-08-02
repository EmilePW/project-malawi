import React from 'react';
import ReactDOM from'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Splash from './components/Splash';
import Overview from './components/Overview';
import Conservation from './components/Conservation';
import Health from './components/Health';
import Economy from './components/Economy';

class App extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
			<div class="wrapper">
				<Sidebar />
				{this.props.children}
			</div>
		);
	}
}

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<Route component={Main}>
				<IndexRoute component={Splash}></IndexRoute>
				<Route path="overview" component={Overview}></Route>
				<Route path="conservation" component={Conservation}></Route>
				<Route path="health" component={Health}></Route>
				<Route path="economy" component={Economy}></Route>
			</Route>
		</Route>
	</Router>,
	document.getElementById('app')
);

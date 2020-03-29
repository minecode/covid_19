import React from 'react';
import TotalState from './TotalState';
import Map from './Map';
import Timeline from './Timeline';

class Home extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center" id="posts">
					<h1 className="display-4">Dashboard</h1>
					<p>Info live</p>
				</div>
				<div className="m-5 text-center">
					<TotalState />
				</div>
				<div className="m-5 text-center align-items-center">
					<Map/>
				</div>
				<div className="m-5 text-center align-items-center">
					<Timeline />
				</div>
			</div>
		);
	}
}

export default Home;
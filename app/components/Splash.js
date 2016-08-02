import React from 'react';
import Video from 'react-html5video';

class Splash extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
			<section className="splash">
				<Video className="splash-video" autoPlay loop muted
            poster="https://upload.wikimedia.org/wikipedia/commons/8/8e/ILRI,_Stevie_Mann_-_Farm_landscape_in_central_Malawi.jpg"
            onCanPlayThrough={() => {
                // Do stuff 
            }}>
            <source src="./public/assets/malawi-video.mp4" type="video/mp4" />
        </Video>
				<div className="title-box">
					<div className="black-strip"></div>
					<h1 className="title">
						Project
						<div className="red-strip"></div>
						Malawi
					</h1>
					<div className="green-strip"></div>
				</div>
				<p className="tagline">
					Helping The Warm Heart Of Africa.
				</p>
			</section>
		);
	}
}

export default Splash;

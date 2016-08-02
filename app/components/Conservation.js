import React from 'react';

class Conservation extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
			<section className="overview">
				<header className="section-top">
					<h2 className="section-title">Conservation, Sustainability and the Environment</h2>
				</header>
				<section className="main-copy">
					<p>
						Composing the interface between Tanzania and Northern Mozambique is Lake Malawi, the 9th largest lake in the world, containing more species of fish than any other.
						<br/><br/>
						<figure>
							<img className="multiple-filters" src="https://upload.wikimedia.org/wikipedia/commons/5/51/Canoes_on_Lake_Malawi.jpg"/>
							<figcaption>Canoes on Lake Malawi</figcaption>
						</figure>
						<br/>
						It takes up a third of the country’s area and its diverse ecosystem serves the country in the production of fish for farming and as a gravitational center for eco-tourism. The Lake Malawi National Park, a UNESCO World Heritage Site, is devoted to the latter purpose.
						<br/>
						Malawi is also covered in large part by forest and foliage, consuming a quarter of the surface area. It supplies the country’s primary export of tobacco, a crop which accounts for over three quarters of Malawi’s international earnings.
						<br/><br/>
						In these two signets of nature, water and earth, lie two difficult questions. Firstly, the world is steadily reducing its tobacco consumption, subsequently leading a drop in the price of the crop. While this is rightly done for the health implications of smoking, in what direction can Malawi’s agricultural industry pivot to avoid catastrophe, especially in lieu of significant deforestation? Second, in the light of food crises, how will Malawi continue to feed its people while avoiding long-term destruction of fish populations, mid-term marring of farmland quality and short-term obseletion of endangered species?
						<br/><br/>
						Complete answers remain hidden, but the work of domestic and international organisations and partnerships goes some way to posing solutions. Teaching of subsistence farming techniques, environmental awareness programs, anti-poaching and anti-pollution initiatives and other efforts all aim to ensure a future for many Malawians and the local environment.
					</p>
				</section>
			</section>
		);
	}
}

export default Conservation;
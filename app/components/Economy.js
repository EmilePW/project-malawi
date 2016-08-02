import React from 'react';

class Economy extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
			<section className="overview">
				<header className="section-top">
					<h2 className="section-title">The Economy</h2>
				</header>
				<section className="main-copy">
					<p>
						The active economy of Malawi is primarily agricultural, with around 90% of the population living in rural land. As a nation of farmers, tobacco is the primary export - despite its size, Malawi is the fifth largest producer of raw tobacco.
						<br/><br/>
						<figure>
							<img className="multiple-filters" src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Groundnut_harvesting_in_Malawi.jpg"/>
							<figcaption>Groundnut Harvesting</figcaption>
						</figure>
						<br/>
						Other farmed goods include tea, coffee and sugarcane. In all, this quartet translates to 90% of Malawi’s exportation revenue. Agriculture as a whole accounts for two-fifths of the country’s GDP, the other primary bulk being the services sector, itself composed of tourism, retail, transport, education, telecommunications and banking. The Government of Malawi holds shares in many of the corresponding companies.
						<br/><br/>
						Malawi is still highly dependent on international support, from the International Monetary Fund, the World Bank, and many other foreign aid initiatives and charities. Public Debt stands at half of GDP and half of the population lives below the poverty line. The economy is improving steadily but recurring food and environmental crises provide chronic setbacks that may partially doom Malawi for a long time.
						<br/><br/>
						<figure>
							<img className="multiple-filters" src="https://upload.wikimedia.org/wikipedia/commons/3/35/Lilongwe_(Malawi)_-_crafts_market.JPG"/>
							<figcaption>Market Souvenirs</figcaption>
						</figure>
						<br/>
						Aid will need to continue for some years, and one can only hope that flooding and droughts do not reign supreme in the fight to earn a living.
					</p>
				</section>
			</section>
		);
	}
}

export default Economy;
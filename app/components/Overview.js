import React from 'react';

class Overview extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
			<section className="overview">
				<header className="section-top">
					<h2 className="section-title">An Overview</h2>
				</header>
				<section className="main-copy">
					<p>
						Malawi is a landlocked country in the south east of the African continent, bordered by Tanzania to the North, Zambia to the West, and Mozambique to the rest.
						<br/><br/>
						<figure>
							<img className="multiple-filters" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Flag_of_Malawi.svg/2000px-Flag_of_Malawi.svg.png"/>
							<figcaption>Flag of Malawi</figcaption>
						</figure>
						<br/>
						It was born in 1964 after the dissolution of British colonial rule of its former identity, Nyasaland. Dr. Hastings Banda, after winning a democratic majority, established himself and his party as a singleton, presiding over the country for nearly three decades. Infrastructure and agriculture bolstered the economy. Nonetheless, Banda’s rule was autocratic, presiding over a compulsory conservative culture of the citizens and routinely exiling, torturing and murdering political opponents.
						<br/><br/>
						Today, Malawi is led by President Peter Mutharika, a former professor and lawyer, who was elected in 2014.
						<br/><br/>
						Malawi’s population numbers around 17 million people most of whom reside in rural areas. The populus is fractured into multiple ethnic groups, with the largest being the Checwa. Their language, Chichewa, is the most frequently spoken, and is one of two official lanuages, next to English.
						<br/><br/>
						Malawi remains one of the world’s poorest nations, its GDP per capita consistently ranking in the bottom five. Infant mortality is high, life expectancy is low and HIV/AIDS affects more than one in 10 adults.
						<br/><br/>
						There are positive signs however; sectarian violence has diminished significantly over the last decade, educational and economic benchmarks are improving and reliance on external aid is decreasing. The existence of a multi-party democracy and the lack of extended conflict highlight Malawi as a nation able to embark on a path to significantly improving the life of its citizens.
						<br/><br/>
						Project Malawi is designed to give a brief overview of issues the country is currently facing and provides links to donate to organisations working on them.

					</p>
				</section>
			</section>
		);
	}
}

export default Overview;

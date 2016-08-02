import React from 'react';

class Health extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
			<section className="overview">
				<header className="section-top">
					<h2 className="section-title">Healthcare and HIV/AIDS</h2>
				</header>
				<section className="main-copy">
					<p>
						Life expectancy at birth in Malawi is 50 years old, although many don’t make it that far with high rates of infant mortality. There is a high risk for many diseases, including hepatitis A, typhoid fever, malaria, plague and rabies. The highest and most prevalent risk, however, is for HIV/AIDS.
						<br/><br/>
						<figure>
							<img className="multiple-filters" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/AIDS_and_HIV_prevalence.svg/940px-AIDS_and_HIV_prevalence.svg.png"/>
							<figcaption>Global HIV/AIDS Prevalence</figcaption>
						</figure>
						<br/>
						Nearly one million Malawian adults have the disease and around seventy-thousand every year from it. It is estimated that over 70% of hospital beds in Malawi are for HIV/AIDS patients, an enormous tragedy as well as a drain on the health resources of the country.
						<br/><br/>
						<figure>
							<img id="aids-orphans" className="multiple-filters" src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Feed_The_Children_CBCC_P1000182.jpg"/>
							<figcaption>AIDS Orphans</figcaption>
						</figure>
						<br/>
						To make matters worse, there is significant stigma surrounding HIV/AIDS and many people are afraid to be diagnosed, lest they be ostracised from their communities. Some deduce that the rate of disease is actually even higher, especially in communities where such stigma is prevalent.
						<br/>
						<br/>
						The country is also not performing well in preventing maternal deaths and women can be harmed elsewhere through Female genital mutilation.
						<br/><br/>
						There is a severe lack of healthcare professionals in Malawi, in the most poverty-stricken areas, such as the Nkhata Bay District, there is a single doctor in the district, supplying for one-hundred-thousand residents.
						<br/><br/>
						Trained volunteers from overseas can aid local communities and health organisations by lowering the ratio of citizens per healthcare professional.
					</p>
				</section>
			</section>
		);
	}
}

export default Health;

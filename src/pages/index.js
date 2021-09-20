import * as React from "react";
import { Helmet } from "react-helmet";
import Layout from '../components/Layout';
import Hero from '../components/sections/Hero';
import Schedule from '../components/sections/Schedule';
import Registry from '../components/sections/Registry';
import Travel from '../components/sections/Travel';
import Accommodations from '../components/sections/Accommodations';
import Rsvp from '../components/sections/Rsvp';

const IndexPage = () => {
	return (
		<React.Fragment>
			<Helmet>
				<title>Kevin & Nadia | A Knopp Wedding</title>
				<link rel="icon" href="https://fav.farm/🚂" />
				<meta name="theme-color"
					content="#183905"
					media="(prefers-color-scheme: light)"
				/>
				<meta name="theme-color"
					content="#183905"
					media="(prefers-color-scheme: dark)"
				/>
			</Helmet>
			<Layout>
				<Hero/>
				<div className="body-content">
					<Schedule/>
					<Travel/>
					<Accommodations/>
					<Registry/>
					<Rsvp/>
				</div>
			</Layout>
		</React.Fragment>
	)
}

export default IndexPage

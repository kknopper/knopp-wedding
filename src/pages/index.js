import * as React from "react";
import { Helmet } from "react-helmet";
import Layout from '../components/layout';
import Hero from '../components/sections/hero';
import Schedule from '../components/sections/schedule';
import Registry from '../components/sections/registry';
import Travel from '../components/sections/travel';
import Accommodations from '../components/sections/accommodations';
import Rsvp from '../components/sections/rsvp';

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

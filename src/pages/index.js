import * as React from "react";
import Layout from '../components/layout';
import Hero from '../components/sections/hero';
import Details from '../components/sections/details';
import Registry from '../components/sections/registry';
import Schedule from '../components/sections/schedule';
import Accommodations from '../components/sections/accommodations';
import Rsvp from '../components/sections/rsvp';
// import "normalize.css";

const IndexPage = () => {
	return (
		<Layout pageTitle="Kevin & Nadia | A Knopp Wedding">
			<Hero/>
			<Details/>
			<Schedule/>
			<Accommodations/>
			<Registry/>
			<Rsvp/>
		</Layout>
	)
}

export default IndexPage

import * as React from "react";
import Layout from '../components/layout';
import Hero from '../components/hero';
import Details from '../components/sections/details';
// import "normalize.css";

const IndexPage = () => {
	return (
		<Layout pageTitle="Kevin & Nadia | A Knopp Wedding">
			<Hero>
				<h1>We're getting Married!</h1>
			</Hero>
			<Details/>
		</Layout>
	)
}

export default IndexPage

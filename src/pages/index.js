import * as React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from '../components/layout';
import Hero from '../components/sections/hero';
import Schedule from '../components/sections/schedule';
import Faq from '../components/sections/faq';
import Registry from '../components/sections/registry';
import Travel from '../components/sections/traveling';
import Lodging from '../components/sections/lodging';
import Rsvp from '../components/sections/rsvp';
import Photos from '../components/sections/photos';

// This ensures that the icon CSS is loaded immediately before attempting to render icons
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
// Prevent fontawesome from dynamically adding its css since we did it manually above
config.autoAddCss = false;

const IndexPage = ({data}) => {
	const imageNodes = data.allFile.edges.map(({ node }) => node.childImageSharp);

	return (
		<React.Fragment>
			<Helmet htmlAttributes={{ lang: 'en' }}>
				<title>Kevin & Nadia | A Knopp Wedding</title>
				<link rel="icon" href="https://fav.farm/🚂" />
				<meta name="description" content="Kevin and Nadia are getting Married! Join us for the weekend to celebrate" />
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
					<Faq/>
					<Travel/>
					<Lodging/>
					<Rsvp/>
					<Registry/>
					<Photos images={imageNodes} />
				</div>
			</Layout>
		</React.Fragment>
	)
}

export const pageQuery = graphql`
	query ImagesForGallery {
		allFile(
			filter: { relativeDirectory: { eq: "gallery" } }
			sort: { fields: name }
		) {
			edges {
				node {
					childImageSharp {
						thumb: gatsbyImageData(
							width: 270
							height: 270
							placeholder: BLURRED
						)
						full: gatsbyImageData(layout: FULL_WIDTH)
					}
				}
			}
		}
	}
`

export default IndexPage

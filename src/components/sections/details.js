import * as React from 'react';
import styled from 'styled-components';
import { StaticImage } from "gatsby-plugin-image";
import Section from '../section';
import CalendarButton from '../CalendarButton';

/* import { faRingsWedding } from "@fortawesome/free-solid-svg-icons"; */


const Content = styled.div`
	grid-area: content;
	text-align: center;
`

const Details = () => {
	return (
		<React.Fragment>
			<Section id="details" headlineText="The Wedding">
				<Content>
					<p>All the info you'll need for our special day.</p>
					<StaticImage className="details-img" src="../../images/venue.jpg" alt="Roaring Camp" placeholder="blurred" />
					<h3 className="when">Friday, March 11th, 2022</h3>
					<h3 className="where">Roaring Camp Railroads<br />5401 Graham Hill Road<br />Felton, CA 95018</h3>
				</Content>
			</Section>
			<CalendarButton />
		</React.Fragment>
	)
}

export default Details
import * as React from 'react';
import styled from 'styled-components';
import { breakpoint } from '../css-mixins';
import { faRoute } from "@fortawesome/free-solid-svg-icons";
import Section from '../section';
import LocationCard from '../location-card';
import airportInfo from '../../airports';

const Airports = styled.ul`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 15px;
	
	${breakpoint.small`
		grid-template-columns: 1fr;
	`}
`;

const Travel = () => {
	return (
		<Section id="travel" headlineIcon={faRoute}>
			<h3>Airports</h3>
			<Airports>
				{airportInfo.map((airport, index) => (
					<LocationCard key={index} place={airport} />
				))}
			</Airports>
			<h3>Accommodations</h3>
			<p>We have reserved a block of rooms at the Four Points by Sheraton, which is the hotel where we will be staying. You can call the hotel and use the code <code>KEV</code> or, click on the booking link in the hotel card below.</p>
			<p> Please note that we can't guarantee any prices, as the blocked rates are booking directly with the hotel. You may be able to find better deals with 3rd party booking sites, or with AirBnB.</p>
		</Section>
	)
}

export default Travel

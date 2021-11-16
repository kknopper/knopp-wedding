import * as React from 'react';
import styled from 'styled-components';
import { breakpoint } from '../css-mixins';
import { lighten, rem } from 'polished';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRoute, faCarAlt, faMapMarkerAlt, faPlane } from "@fortawesome/free-solid-svg-icons";
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

const Airport = styled.li`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	text-align: left;
	border-radius: 10px;
	border: 2px solid ${lighten('0.35', 'rgba(34,34,34, 0.3)')};
	padding: 15px;
	transition: background-color 0.3s ease-in-out;
	position: relative;

	address {
		display: block;
	}

	&.active {
		background-color: ${lighten('0.65', 'rgba(34,34,34, 0.3)')};
	}
`;

const AirportName = styled.h3`
	margin: 25px 0 25px;
	font-size: 1.25em;

	${breakpoint.small`
		font-size: 1.5em
	`}

	${breakpoint.xsmall`
		font-size: ${rem(20)}
	`}
`;

const AirportCode = styled.p`
	margin-top: 0;

	code {
		margin-left: 5px;
	}
`;

const IconText = styled.span`
	display: inline-flex;
	align-items: center;
	padding-left: 5px;
	width: 85%;
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
			<p>We have selected a few hotels were we have reserved a block of rooms. Please check out out the hotels in the section below. </p>
		</Section>
	)
}

export default Travel

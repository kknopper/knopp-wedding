import * as React from 'react';
import styled from 'styled-components';
import { faRoute } from "@fortawesome/free-solid-svg-icons";
import Section from '../section';
import VenueMap from '../venue-map';

const StyledSection = styled(Section)`
	grid-area: travel;
`

const Travel = () => {
	return (
		<StyledSection id="travel" headlineIcon={faRoute}>
			<VenueMap />
			<h3>Flying in?</h3>
		</StyledSection>
	)
}

export default Travel

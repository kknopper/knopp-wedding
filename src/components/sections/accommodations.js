import * as React from 'react';
import styled from 'styled-components';
import { faHotel } from "@fortawesome/free-solid-svg-icons";
import Section from '../Section';
import VenueMap from '../VenueMap';

const StyledSection = styled(Section)`
	grid-area: accommodations;
`

const Accommodations = () => {
	return (
		<StyledSection id="accommodations" headlineIcon={faHotel}>
			<VenueMap />
		</StyledSection>
	)
}

export default Accommodations

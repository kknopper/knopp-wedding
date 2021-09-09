import * as React from 'react';
import styled from 'styled-components';
import { faHotel } from "@fortawesome/free-solid-svg-icons";
import Section from '../section';

const StyledSection = styled(Section)`
	grid-area: accommodations;
`

const Accommodations = () => {
	return (
		<StyledSection id="accommodations" headlineIcon={faHotel}></StyledSection>
	)
}

export default Accommodations

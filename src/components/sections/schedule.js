import * as React from 'react';
import styled from 'styled-components';
import { faRoute } from "@fortawesome/free-solid-svg-icons";
import Section from '../section';

const StyledSection = styled(Section)`
	grid-area: schedule;
`

const Schedule = () => {
	return (
		<StyledSection id="travel" headlineIcon={faRoute}>
			
		</StyledSection>
	)
}

export default Schedule

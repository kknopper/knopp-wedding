import * as React from 'react';
import styled from 'styled-components';
import { faClock } from "@fortawesome/free-solid-svg-icons";
import Section from '../section';

const StyledSection = styled(Section)`
	grid-area: schedule;
`

const Schedule = () => {
	return (
		<StyledSection id="schedule" headlineIcon={faClock}></StyledSection>
	)
}

export default Schedule

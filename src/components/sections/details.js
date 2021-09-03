import * as React from 'react';
import styled from 'styled-components';
import Section from '../section';
import CalendarButton from '../CalendarButton';

const StyledSection = styled(Section)`
	grid-area: details;
`

const Details = () => {
	return (
		<StyledSection id="details">
			<div className="details">
				<div className="when"></div>
				<div className="where"></div>
				<CalendarButton />
			</div>
		</StyledSection>
	)
}

export default Details
import * as React from 'react';
import Section from '../section';
import styled from 'styled-components';

const StyledSection = styled(Section)`
	grid-area: details;
`

const Details = () => {
	return (
		<StyledSection id="details">
			Wedding details
		</StyledSection>
	)
}

export default Details
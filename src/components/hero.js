import * as React from 'react';
import Section from '../components/section';
import styled from 'styled-components';

const StyledSection = styled(Section)`
	text-align: center;
	align-content: center;
	height: calc(100vh - 100px);
	grid-area: hero;
	background: lavender;
`

const Hero = ({ children }) => {
	return (
		<StyledSection>
			{children}
		</StyledSection>
	)
}

export default Hero
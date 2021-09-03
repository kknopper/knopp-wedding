import * as React from 'react';
import styled from 'styled-components';
import Section from './section';

const StyledSection = styled(Section)`
	text-align: center;
	align-content: center;
	height: calc(100vh - 100px);
	grid-area: hero;
	background: lavender;
	font-family: 'Calafia';
`

const Hero = ({ children }) => {
	return (
		<StyledSection>
			{children}
		</StyledSection>
	)
}

export default Hero
import * as React from 'react';
import styled from 'styled-components'
import SectionHeadline from './SectionHeadline';
import { breakpoint } from './css-mixins'

const SectionStyled = styled.section`
	height: auto;
	width: 100%;
	background: var(--theme-bg);
	color: var(--theme-text);
	position: relative;
	z-index: 1;

	/* Safari / Webkit z-index fix */
	transform: translateZ(0);
`;

const SectionContent = styled.div`
	display: grid;
	grid-template-columns: 1fr 65ch 1fr;
	grid-template-areas: 
	"headline headline headline"
	". content .";

	${breakpoint.small`
		grid-template-columns: 5% 1fr 5%;
		grid-template-areas: 
			"headline headline headline"
			". content .";
	`}
`

const Section = ({ id, className, children, headlineText, headlineIcon }) => {
	return (
		<SectionStyled id={id} className={`section ${className}`}>
			<SectionContent>
				<SectionHeadline faIcon={headlineIcon}>{ headlineText || id }</SectionHeadline>
				{children}
			</SectionContent>
		</SectionStyled>
	)
}

export default Section
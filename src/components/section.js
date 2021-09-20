import * as React from 'react';
import styled from 'styled-components';
// import { useInView } from "react-intersection-observer"
import SectionHeadline from './SectionHeadline';
import { breakpoint } from './css-mixins';

const SectionStyled = styled.section`
	height: auto;
	width: 100%;
	background: var(--theme-bg);
	color: var(--theme-text);
	position: relative;
	/* z-index: 1; */
	/* transform: translateZ(0); */
`;

const SectionContent = styled.div`
	display: grid;
	grid-template-columns: 1fr 1000px 1fr;
	grid-template-areas: 
	"headline headline headline"
	". content .";

	${breakpoint.medium`
		grid-template-columns: 5% 1fr 5%;
		grid-template-areas: 
			"headline headline headline"
			". content .";
	`}
`

const Content = styled.div`
	grid-area: content;
	text-align: center;
`

const Section = ({ id, children, headlineText, headlineIcon }) => {
	return (
		<SectionStyled id={id} className={`section section-${id}`}>
			<SectionContent>
				<SectionHeadline faIcon={headlineIcon || null}>
					{ headlineText || id }
				</SectionHeadline>
				<Content>
					{children}
				</Content>
			</SectionContent>
		</SectionStyled>
	)
}

export default Section
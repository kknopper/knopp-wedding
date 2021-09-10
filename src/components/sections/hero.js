import * as React from 'react';
import styled from 'styled-components';
import { StaticImage } from "gatsby-plugin-image"
import { breakpoint } from '../css-mixins'


const StyledSection = styled.section`
	--padding: 20px;
	text-align: center;
	align-content: center;
	height: calc(100vh);
	width: 100%;
	grid-area: hero;
	background: var(--theme-bg);
	font-family: 'Playfair Display';
	padding: var(--padding);
	box-sizing: border-box;
	position: sticky;
	top: 0;
	z-index: 0;
	display: flex;
	justify-content: center;
	align-items: center;

	.hero-img {
		height: calc(100vh -  (var(--padding) * 2));
		grid-area: 1/1;
		width: 100%;
	}
`

const HeroContent = styled.div`
	grid-area: 1/1;
	position: absolute;
	padding: 25px;
`;

const StyledHeadline = styled.h1`
	color: #fff;
	font-size: 7em;
	margin: 0;
	transition: font-size 0.5s ease-in-out;

	${breakpoint.medium`
		font-size: 5em;
	`}

	${breakpoint.small`
		font-size: 3em;
	`}
	
`;

const StyledSubheadline = styled.h2`
	color: rgba(355,355,355, 0.95);
	font-size: 3em;
	margin: 25px 0 0 0;
	transition: font-size 0.5s ease-in-out;

	${breakpoint.medium`
		font-size: 2em;
	`}

	${breakpoint.small`
		font-size: 1.75em;
	`}
`;

const Hero = () => {
	return (
		<StyledSection>
			<StaticImage className="hero-img" src="../../images/hero.jpg" alt="Redwood Grove" loading="eager" placeholder="blurred" />
			<HeroContent>
				<StyledHeadline>Kevin & Nadia</StyledHeadline>
				<StyledSubheadline>We're getting Married!</StyledSubheadline>
			</HeroContent>
		</StyledSection>
	)
}

export default Hero
import * as React from 'react';
import styled from 'styled-components';
import { StaticImage } from "gatsby-plugin-image";
import { useSpring, animated, config } from 'react-spring';
import { breakpoint } from '../css-mixins';
import Scroll from '../scroll'


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
		height: calc(100vh -  (var(--padding) * 2) - env(safe-area-inset-bottom));
		grid-area: 1/1;
		width: 100%;
	}
`

const HeroContent = styled.div`
	grid-area: 1/1;
	position: absolute;
	padding: 25px;
`;

const StyledHeadline = styled(animated.h1)`
	color: #fff;
	font-size: 7em;
	font-weight: 300;
	margin: 0;

	${breakpoint.medium`
		font-size: 5em;
	`}

	${breakpoint.small`
		font-size: 3em;
	`}
	
`;

const StyledSubheadline = styled(animated.h2)`
	color: rgba(355,355,355, 0.95);
	font-size: 3em;
	margin: 25px 0 0 0;

	${breakpoint.medium`
		font-size: 2em;
	`}

	${breakpoint.small`
		font-size: 1.75em;
	`}
`;



const Hero = () => {
	const Animation = (delay = 0) => useSpring({ 
		from: { y: 30, opacity: 0 },
		y: 0,
		opacity: 1,
		config: config.molasses,
		delay: delay
	});

	return (
		<StyledSection>
			<StaticImage className="hero-img" src="../../images/hero.jpg" alt="Redwood Grove" loading="eager" placeholder="blurred" />
			<HeroContent>
				<StyledHeadline style={Animation(500)}>Kevin & Nadia</StyledHeadline>
				<StyledSubheadline style={Animation(800)}>We're getting Married!</StyledSubheadline>
			</HeroContent>
			<Scroll />
		</StyledSection>
	)
}

export default Hero
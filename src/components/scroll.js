import React from 'react';
import { animated, useSpring, config } from 'react-spring';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import styled from 'styled-components'

const StyledScroll = styled(animated.div)`
	position: absolute;
	bottom: 5vw;
	width: 100%;
	color: white;
	text-align: center;
	text-transform: uppercase;
	letter-spacing: 2px;
	font-family: 'Open Sans';
	font-size: 0.8em;
	font-weight: 800;
	padding-bottom: 5px;
	text-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
	height: 60px;
`

const StyledIcon = styled(FontAwesomeIcon)`
	display: block;
	font-size: 1.5em;
	margin: 18px auto;
`

const Scroll = () => {
	const fadeIn = useSpring({
		delay: 2500,
		config: config.wobbly,
		from: { opacity: 0, transform: 'translateY(30px)' },
		opacity: 1,
		transform: 'translateY(0)'
	})

	return <StyledScroll style={fadeIn}>
		Scroll
		<StyledIcon icon={faAngleDoubleDown} />
	</StyledScroll>
}

export default Scroll
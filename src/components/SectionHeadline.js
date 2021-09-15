import * as React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { font, breakpoint } from './css-mixins';
import { useSpring, animated } from 'react-spring';
import { useInView } from "react-intersection-observer";

const StyledHeadline = styled(animated.h2)`
	${font({family: 'Playfair Display', color: 'var(--theme-text)', size: '70px'})};
	text-align: center;
	grid-area: headline;
	padding: 30px 0;

	${breakpoint.small`
		font-size: 2em;
	`}
`

const StyledIcon = styled(FontAwesomeIcon)`
	font-size: 0.75em;
`

const StyledText = styled.span`
	padding-left: 10px;
`

const SectionHeadline = ({faIcon, children}) => {
	const capitalize = ([firstLetter, ...restOfWord]) => firstLetter.toUpperCase() + restOfWord
	const [ref, inView] = useInView({
		triggerOnce: true,
		rootMargin: '-200px 0px',
	});
	const animation = useSpring({ to: { opacity: inView ? 1 : 0, y: inView ? 0 : -30}, from: { opacity: 0, y: -30 }, config: { duration: 400 }, });

	return (
		<StyledHeadline ref={ref} style={animation}>
			{faIcon != null ? <StyledIcon icon={faIcon} /> : null}
			<StyledText>{capitalize(children)}</StyledText>
		</StyledHeadline>
	)
}

export default SectionHeadline
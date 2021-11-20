import * as React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { font, breakpoint } from './css-mixins';
import { useSpring, animated } from 'react-spring';
import { useInView } from "react-intersection-observer";

const StyledHeadline = styled(animated.h2)`
	/* ${font({family: 'Playfair Display', color: 'var(--theme-text)', size: '70px'})}; */
	grid-area: headline;
	text-align: center;
	padding: 30px 0;
	margin-bottom: 0;
	display: flex;
	justify-content: center;
	align-items: baseline;

	${breakpoint.xsmall`
		font-size: 2em;
	`}
`

const StyledIcon = styled(FontAwesomeIcon)`
	--logo-offset: 1px;
	font-size: 0.75em;
	padding-right: 10px;
	position: relative;
	top: var(--logo-offset);
`

const StyledText = styled.span`
	
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
			{faIcon != null ? <StyledIcon icon={faIcon} className="fa-icon"/> : null
				// <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="wedding-rings" className="svg-inline--fa fa-wedding-rings fa-w-17 SectionHeadline__StyledIcon-gCPbxz ixtqqJ" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M351.25 160.77A206.38 206.38 0 0 1 379.9 233 112 112 0 1 1 224 336c0-42.21 23.69-78.57 58.31-97.49 3.37 10.64 5.69 21.75 5.69 33.49a111.34 111.34 0 0 1-30.73 76.6A79.84 79.84 0 0 0 293 403.23 175.36 175.36 0 0 0 352 272c0-81.62-55.64-150.07-131-170l35-70-32-32h-96L96 32l35 70C55.64 121.93 0 190.38 0 272a176 176 0 0 0 176 176 171.77 171.77 0 0 0 22.94-1.71A175.93 175.93 0 0 0 512 336c0-92-70.7-167.49-160.75-175.23zM64 272a112.12 112.12 0 0 1 112-112c26.85 0 51.19 9.88 70.5 25.69C194.94 216.24 160 271.68 160 336a175.89 175.89 0 0 0 6.55 47C109.28 378.16 64 330.52 64 272z" class=""></path></svg>
			}
			<StyledText>{capitalize(children)}</StyledText>
		</StyledHeadline>
	)
}

export default SectionHeadline
import * as React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { font, breakpoint } from './css-mixins';

const StyledHeadline = styled.h2`
	${font({family: 'Playfair Display', color: 'rgb(34, 34, 34)', size: '3em'})};
	text-align: center;
	grid-area: headline;

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
	return (
		<StyledHeadline>
			<StyledIcon icon={faIcon} />
			<StyledText>{capitalize(children)}</StyledText>
		</StyledHeadline>
	)
}

export default SectionHeadline
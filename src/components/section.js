import * as React from 'react';
import styled from 'styled-components'

const SectionStyled = styled.section`
	height: 100vh;
	width: 100%;
`;

const Section = ({ id, className, children }) => {
	return (
		<SectionStyled id={id} className={`section ${className}`}>
			{children}
		</SectionStyled>
	)
}

export default Section
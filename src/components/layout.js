import * as React from 'react';
import styled from "styled-components"
import { GlobalStyle } from './css-global-styles';
import Header from './Header';
import { breakpoint } from './css-mixins'

const StyledMain = styled.main`
	/* display: grid;
	grid-template-columns: 1fr 65ch 1fr; */
	/* grid-template-areas:
		"header header header"
		"hero hero hero"
		". details ."
		". schedule ."
		". accommodations ."
		". registry ."
		". rsvp ."; */
	background: #fff;
	
	${breakpoint.small`
		grid-template-columns: 5% 1fr 5%;
	`}
`

const Layout = ({ children }) => {
	return (
		<React.Fragment>
			<GlobalStyle />
			<StyledMain>
				<Header />
				{children}
			</StyledMain>
		</React.Fragment>
	)
}

export default Layout
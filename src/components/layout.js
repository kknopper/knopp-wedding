import * as React from 'react';
import styled from "styled-components"
import { GlobalStyle } from './css-global-styles';
import Header from './header';

const StyledMain = styled.main`
	display: grid;
	grid-template-columns: 1fr 65ch 1fr;
	grid-template-areas:
		"header header header"
		"hero hero hero"
		". details .";
`

const Layout = ({ pageTitle, children }) => {
	return (
		<React.Fragment>
			<GlobalStyle />
			<title>{pageTitle}</title>
			<StyledMain>
				<Header />
				{children}
			</StyledMain>
		</React.Fragment>
	)
}

export default Layout
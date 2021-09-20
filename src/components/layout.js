import * as React from 'react';
import styled from "styled-components"
import { GlobalStyle } from './css-global-styles';
import Header from './header';
import { breakpoint } from './css-mixins'

const StyledMain = styled.main`
	width: 100%;
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
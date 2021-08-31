import * as React from 'react';
import Header from '../components/header';
import styled from 'styled-components';

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
			<title>{pageTitle}</title>
			<StyledMain>
				<Header />
				{children}
			</StyledMain>
		</React.Fragment>
	)
}

export default Layout
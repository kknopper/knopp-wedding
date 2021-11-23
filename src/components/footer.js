import * as React from 'react';
import styled from 'styled-components';
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { breakpoint } from './css-mixins';

const StyledFooter = styled.footer`
	height: auto;
	text-align: center;
	background: #272729;
	min-height: 50px;
	padding: 15px;
	transform: translateZ(0);
	color: var(--theme-bg);
`;

const StyledLink = styled.a`
	text-decoration: underline;
`;

const Anchor = styled(AnchorLink)`
	flex-basis: 100%;

	${breakpoint.small`
		flex-basis: auto;
	`}
`;

const Footer = () => {

	return (
		<StyledFooter >
			<p>Made with ❤️ by Kevin Knopp</p>
			<p>Engagement photos by <StyledLink href="https://www.monicadawn.com/" target="_blank">Monica Dawn</StyledLink></p>
			<p>©️ Kevin & Nadia {new Date().getFullYear()}</p>
		</StyledFooter>
	)
}

export default Footer
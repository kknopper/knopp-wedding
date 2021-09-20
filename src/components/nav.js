import * as React from 'react';
import { AnchorLink } from "gatsby-plugin-anchor-links";
import styled from "styled-components"
import { breakpoint } from './css-mixins'


const StyledNav = styled.nav`
	${breakpoint.small`
		display: none;
	`}
`

const StyledUl = styled.ul`
	/* margin: 0; */
`

const StyledLi = styled.li`
	display: inline-block;
	padding: 10px;
	font-size: 1.5em;

	a {
		color: #000;
		font-family: 'Blooming Elegant Sans'
	}
`

const Nav = () => {
	return (
		<StyledNav>
			<StyledUl>
				<StyledLi>
					<AnchorLink
						to="/#schedule"
						title="Schedule"
						className="stripped"
						stripHash
					/>
				</StyledLi>
				<StyledLi>
					<AnchorLink
						to="/#travel"
						title="Travel"
						className="stripped"
						stripHash
					/>
				</StyledLi>
				<StyledLi>
					<AnchorLink
						to="/#accommodations"
						title="Accommodations"
						className="stripped"
						stripHash
					/>
				</StyledLi>
				<StyledLi>
					<AnchorLink
						to="/#faq"
						title="FAQ"
						className="stripped"
						stripHash
					/>
				</StyledLi>
				<StyledLi>
					<AnchorLink
						to="/#registry"
						title="Registry"
						className="stripped"
						stripHash
					/>
				</StyledLi>
				<StyledLi>
					<AnchorLink
						to="/#rsvp"
						title="rsvp"
						className="stripped"
						stripHash
					/>
				</StyledLi>
			</StyledUl>
		</StyledNav>
	)
}

export default Nav
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
		color: #fff;
	}
`

const Nav = () => {
	return (
		<StyledNav>
			<StyledUl>
				<StyledLi>
					<AnchorLink
						to="/#details"
						title="The Deets"
						className="stripped"
						stripHash
					/>
				</StyledLi>
				<StyledLi>
					<AnchorLink
						to="/#schedule"
						title="Schedule"
						className="stripped"
						stripHash
					/>
				</StyledLi>
			</StyledUl>
		</StyledNav>
	)
}

export default Nav
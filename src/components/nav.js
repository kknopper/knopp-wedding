import * as React from 'react';
import { AnchorLink } from "gatsby-plugin-anchor-links";
import styled from "styled-components"

const StyledUl = styled.ul`
	padding-left: 0;
	margin: 0;
`

const StyledLi = styled.li`
	list-style-type: none;
	display: inline-block;
	padding: 10px;
`

const Nav = () => {
	return (
		<nav>
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
		</nav>
	)
}

export default Nav
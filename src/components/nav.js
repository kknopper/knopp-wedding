import * as React from 'react';
import { AnchorLink } from "gatsby-plugin-anchor-links";
import styled from "styled-components"
import { breakpoint } from './css-mixins'
import { useSpring, animated, config } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import useMeasure from 'react-use-measure';
import useWindowDimensions from '../hooks/useWindowDimensions';

const StyledNav = styled(animated.nav)`
	overflow: hidden;
	transition: max-height 250ms ease 0s;
	padding-top: 13px;
	padding-bottom: 10px;

	${breakpoint.small`
		padding: 0;
		width: 100%;
	`}
`

const Li = styled.li`
	display: inline-block;
	padding: 0 10px;
	font-size: 1.5em;

	a {
		color: #000;
		font-family: 'Blooming Elegant Sans';
		display: block;
	}

	${breakpoint.small`
		display: block;
		padding: 10px;
	`}
`;

const Hamburger = styled(FontAwesomeIcon)`
	position: absolute;
	top: 35px;
	right: 25px;
	cursor: pointer;
	font-size: 30px;
	display: none;

	${breakpoint.small`
		display: block;
	`}
`;


const Nav = ({isMobileNavActive, toggleMobileNav, headerInView}) => {
	const [ref, { height: viewHeight }] = useMeasure();
	const [isLoaded, rehydrate] = React.useState(false);

	const { width } = useWindowDimensions();
	const navInView = width > 734 

	const {height} = useSpring({
		height: isMobileNavActive && headerInView ? viewHeight : 0,
	});

	React.useEffect(() => {
		rehydrate(true);
		if (isMobileNavActive) toggleMobileNav();
	}, [navInView]);

	return (
		<React.Fragment>
			<StyledNav key={isLoaded} style={{height: navInView ? 'auto' : height}} >
				<ul ref={ref}>
					<Li>
						<AnchorLink
							to="/#schedule"
							title="Schedule"
							className="stripped"
							onAnchorLinkClick={() => toggleMobileNav()}
						/>
					</Li>
					<Li>
						<AnchorLink
							to="/#questions"
							title="FAQ"
							className="stripped"
							onAnchorLinkClick={() => toggleMobileNav()}
						/>
					</Li>
					<Li>
						<AnchorLink
							to="/#travel"
							title="Travel"
							className="stripped"
							onAnchorLinkClick={() => toggleMobileNav()}
						/>
					</Li>
					<Li>
						<AnchorLink
							to="/#lodging"
							title="Lodging"
							className="stripped"
							onAnchorLinkClick={() => toggleMobileNav()}
						/>
					</Li>
					<Li>
						<AnchorLink
							to="/#rsvp"
							title="rsvp"
							className="stripped"
							onAnchorLinkClick={() => toggleMobileNav()}
						/>
					</Li>
					<Li>
						<AnchorLink
							to="/#registry"
							title="Registry"
							className="stripped"
							onAnchorLinkClick={() => toggleMobileNav()}
						/>
					</Li>
					<Li>
						<AnchorLink
							to="/#photos"
							title="Photos"
							className="stripped"
							onAnchorLinkClick={() => toggleMobileNav()}
						/>
					</Li>
				</ul>
			</StyledNav>
			<Hamburger icon={faBars} onClick={() => toggleMobileNav()} />
		</React.Fragment>
	)
}

export default Nav
import * as React from 'react';
import styled from 'styled-components'
import Nav from './nav';
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { font } from './css-mixins'
import { useSpring, animated, config } from 'react-spring';
import { useInView } from "react-intersection-observer";
import { breakpoint } from './css-mixins';
import useToggle from './useToggle';

const StyledHeader = styled(animated.header)`
	height: auto;
	display: flex;
	justify-content: center;
	text-align: center;
	flex-wrap: wrap;
	/* box-shadow: rgb(0 0 0 / 10%) 0px 2px 4px 0px; */
	box-shadow: 0 25px 50px -12px rgb(0 0 0 / 25%);
	box-sizing: border-box;
	grid-area: header;
	position: fixed;
	top: 0;
	width: 100%;
	/* border-bottom: 1px solid rgb(34, 34, 34); */
	background: #FFF;
	z-index: 2;
	transform: translateY(-200%);
`
const Anchor = styled(AnchorLink)`
	display: block;
	flex-basis: 100%;
`;

const H1 = styled.h1`
	${font({family: 'Playfair Display', color: 'rgb(34, 34, 34)', size: '2em'})};
	line-height: 30px;
	margin: 0;
	padding-top: 20px;

	${breakpoint.small`
		order: 2;
		padding: 35px;
	`}
`;

const Header = () => {

	const [ref, inView] = useInView({
		triggerOnce: false,
		rootMargin: '-50%',
	});
	const [isMobileNavActive, toggleMobileNav] = useToggle();

	const animation = useSpring(
		{ 
			transform: `translateY(${inView ? "0%" : "-200%"})`,
			config: config.slow,
		}
	);

	React.useEffect(() => {
		const detailsEl = typeof document !== "undefined" && document.querySelector(".body-content")
		ref(detailsEl);

		if (!inView && isMobileNavActive) {
			toggleMobileNav();
		}
	}, [ref, inView, isMobileNavActive, toggleMobileNav])

	return (
		<StyledHeader style={animation}>
			<Anchor
				to="/#hero"
				title="Hero"
				className="stripped"
				onAnchorLinkClick={() => { if (isMobileNavActive) toggleMobileNav() }}
			>
				<H1>Kevin & Nadia</H1>
			</Anchor>
			<Nav isMobileNavActive={isMobileNavActive} toggleMobileNav={toggleMobileNav} headerInView={inView} />
		</StyledHeader>
	)
}

export default Header
import * as React from 'react';
import styled from 'styled-components'
import Nav from './nav';
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { breakpoint } from './css-mixins';

const StyledFooter = styled.footer`
	height: auto;
	/* display: flex; */
	/* justify-content: center; */
	text-align: center;
	background: #272729;
	min-height: 50px;
	padding: 15px;
	transform: translateZ(0);
	color: var(--theme-bg);
`
const Anchor = styled(AnchorLink)`
	flex-basis: 100%;

	${breakpoint.small`
		flex-basis: auto;
	`}
`;

// const H1 = styled.h1`
// 	${font({family: 'Playfair Display', color: 'rgb(34, 34, 34)', size: '2em'})};
// 	line-height: 30px;
// 	margin: 0;
// 	padding-top: 20px;

// 	${breakpoint.small`
// 		padding: 35px;
// 	`}
// `;

const Footer = () => {

	// const [ref, inView] = useInView({
	// 	triggerOnce: false,
	// 	rootMargin: '-50%',
	// });
	// const [isMobileNavActive, toggleMobileNav] = useToggle();

	// const animation = useSpring(
	// 	{ 
	// 		transform: `translateY(${inView ? "0%" : "-200%"})`,
	// 		config: config.slow,
	// 	}
	// );

	// React.useEffect(() => {
	// 	const detailsEl = typeof document !== "undefined" && document.querySelector(".body-content")
	// 	ref(detailsEl);

	// 	if (!inView && isMobileNavActive) {
	// 		toggleMobileNav();
	// 	}
	// }, [ref, inView, isMobileNavActive, toggleMobileNav])

	return (
		<StyledFooter >
			<p>Made with ❤️ by Kevin Knopp</p>
			<p>©️ Kevin & Nadia {new Date().getFullYear()}</p>
		</StyledFooter>
	)
}

export default Footer
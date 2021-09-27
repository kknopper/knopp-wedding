import { createGlobalStyle } from "styled-components";
import { normalize, em } from "polished";

// Fonts
import BloomingElegantSans from "../fonts/blooming-elegant-sans.otf";
import BloomingElegantSansBold from "../fonts/blooming-elegant-sans-bold.otf";
import Calafia from "../fonts/calafia-regular.otf";
import "@fontsource/open-sans";
import "@fontsource/playfair-display";


export const GlobalStyle = createGlobalStyle`	
	${normalize()}

	@font-face {
		font-family: "Calafia";
		src: url(${Calafia});
	}
	
	@font-face {
		font-family: "Blooming Elegant Sans";
		src: url(${BloomingElegantSans});
	}

	@font-face {
		font-family: "Blooming Elegant Sans";
		src: url(${BloomingElegantSansBold});
		font-weight: bold;
	}

	:root {
		--theme-text: rgb(34, 34, 34);
		--theme-bg: #fff;
	}

	body {
		padding: 0;
		font-family: "Open Sans";
		color: var(--theme-text);
		overflow-x: hidden;
	}

	ul {
		padding-left: 0;
		margin: 0;
	}

	li {
		list-style-type: none;
	}

	a {
		text-decoration: none;

		&:visited, &:active {
			color: inherit;
		}
	}

	h1, h2, h3, h4, h5, h6 {
		font-family: 'Playfair Display';
	}

	h2 {
		font-size: ${em('70px')}
	}

	h3 {
		font-size: ${em('32px')}
	}

	h4 {
		font-size: ${em('24px')}
	}

	hr {
		width: 100%;
		margin: 1rem .5rem .5rem;
		border: 0;
		height: 1px;
		background-image: linear-gradient(90deg,rgba(34,34,34,0),rgba(34,34,34,.15),rgba(34,34,34,0));
	}

	address {
		font-style: normal;
	}

	.body-content {
		background: var(--theme-bg);
		transform: translateZ(0);
	}
`
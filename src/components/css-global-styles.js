import { createGlobalStyle } from "styled-components";
import { normalize } from "polished"

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

		&:visited {
			color: inherit;
		}
	}
`
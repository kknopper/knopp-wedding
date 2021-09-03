import { createGlobalStyle } from "styled-components";
import {normalize, fontFace} from "polished"

// Fonts
import BloomingElegantSans from "../fonts/blooming-elegant-sans.otf";
import BloomingElegantSansBold from "../fonts/blooming-elegant-sans-bold.otf";
import Calafia from "../fonts/calafia-regular.otf";


export const GlobalStyle = createGlobalStyle`	
	${normalize()}
	
	/* ${fontFace({
		'fontFamily': 'Calafia',
		'fontFilePath': Calafia,
		'fileFormats': ['otf'],
		'formatHint': true
	})} */

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

	body {
		padding: 0;
		font-family: "Blooming Elegant Sans";
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
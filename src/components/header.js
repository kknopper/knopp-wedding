import * as React from 'react';
import styled from 'styled-components'
import { font } from './css-mixins'
import Nav from './nav';

const StyledHeader = styled.header`
	height: 100px;
	display: flex;
	justify-content: center;
	text-align: center;
	flex-wrap: wrap;
	box-shadow: rgb(0 0 0 / 10%) 0px 2px 4px 0px;
	box-shadow: 0 25px 50px -12px rgb(0 0 0 / 25%);
	padding-top: 25px;
	box-sizing: border-box;
	grid-area: header;
	position: absolute;
	top: -100px;
	/* border-bottom: 1px solid rgb(34, 34, 34); */
	background: #FFF;
	z-index: 2;
`

const H1 = styled.h1`
	${font({family: 'Playfair Display', color: 'rgb(34, 34, 34)', size: '2em'})};
	line-height: 30px;
	margin: 0;
	flex-basis: 100%;
`

const Header = () => {
	return (
		<StyledHeader>
			<H1>Kevin & Nadia</H1>
			<Nav />
		</StyledHeader>
	)
}

export default Header
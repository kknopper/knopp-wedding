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
	padding-top: 25px;
	box-sizing: border-box;
	grid-area: header;
	position: sticky;
	top: 0;
	background: #546755;
`

const H1 = styled.h1`
	${font({family: 'Blooming Elegant Sans', color: '#FFF', size: '4em'})};
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
import * as React from 'react';
import Nav from '../components/nav';
import styled from 'styled-components'

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
	margin: 0;
	flex-basis: 100%;
	color: #FFF;
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
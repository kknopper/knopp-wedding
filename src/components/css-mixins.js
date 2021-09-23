import styled, { css } from 'styled-components';

export const breakpoints = {
	large: '1440px',
	medium: '1068px',
	small: '734px',
	xsmall: '320px',
};

//Usage:
// ${breakpoint.small`
//   ...css
// `}

export const breakpoint = Object.keys(breakpoints).reduce(
	(accumulator, label) => {
		accumulator[label] = (...args) => css`
			@media (max-width: ${breakpoints[label]}) {
				${css(...args)};
			}
		`;
		return accumulator;
	},
	{}
);


//Usage:
//`${font({ color: "green", size: "2rem" })};`
export const font = ({ color, size, family }) => `
	color: ${color || "inherit"};
	font-size: ${size || "1em"};
	font-family: ${`"${family}"` || "Helvetica neue"};
`;

export const StyledButton = styled.button`
	border-radius: 5px;
	font-family: 'Blooming Elegant Sans';
	border: none;
	cursor: pointer;
	display: flex;
	align-items: center;
	position: relative;
	margin: 0 auto;
	transition: opacity 0.3s ease-in-out;
	background: #fff;
	border: 2px solid var(--theme-text);
	color: var(--theme-text);
	box-sizing: border-box;
	min-width: 200px;
`;
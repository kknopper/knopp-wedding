import * as React from 'react';
import styled from 'styled-components';
import { faGift } from "@fortawesome/free-solid-svg-icons";
import Section from '../section';
import { iframeBreakpoint } from '../css-mixins';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const Content = styled.div`
	--max-items: 12;
	grid-area: content;
	width: 100%;
	overflow: hidden;
	position: relative;

	.zola-registry-iframe {
		min-height: 2500px;
		width: 100%;
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
	}
`;

//calculate height of iframe
const Filler = styled.div`
	--iframe-header-height: 128px;
	--square-rows: 6;
	--square-percent: 50;
	--width: 1000px;
	--square-height: calc((((var(--square-percent) / 100) * var(--width)) * var(--square-rows)) + (20px * (var(--square-rows) - 1)) + var(--iframe-header-height));
	height: var(--square-height);

	//match zola media queries	
	${iframeBreakpoint.small`
		--iframe-header-height: 95px;
		--square-rows: 4;
		--square-percent: 33.33333333;
	`}

	${iframeBreakpoint.medium`
		--square-rows: 3;
		--square-percent: 25;
	`}
`;

const Registry = () => {
	const { width } = useWindowDimensions();

	return (
		<Section id="registry" headlineIcon={faGift}>
			{width}
			<Content id="zola-iframe-container">
				<iframe
					id="zola-iframe"
					title="registry"
					src="https://widget.zola.com/v1/widget/registry/aknoppwedding/html?maxItems=12&partnerId=squarespace"
					className="zola-registry-iframe"
					scrolling="no"
					width="100%"
					frameBorder="0"
				/>
				<Filler key={width} style={{'--width': (width < 1000) ? `calc(${width}px - (${width}px * 0.1))` : '1000px'}}/>
			</Content>
		</Section>
	)
}

export default Registry

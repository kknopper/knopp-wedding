import * as React from 'react';
import styled from 'styled-components';
import { faGift } from "@fortawesome/free-solid-svg-icons";
import Section from '../section';
import { breakpoint } from '../css-mixins'

const Content = styled.div`
	--max-items: 12;
	grid-area: content;
	width: 100%;

	.zola-registry-iframe {
		min-height: 1600px;
		width: 100%;
		position: relative;
	}

	${breakpoint.small`
		--max-items: 8;
	`}

	${breakpoint.small`
		--max-items: 6;
	`}
`

const Registry = () => {
	// const iframeRef = React.createRef(null);
		// console.log(iframeRef.current);
	// let computed = window.getComputedStyle(iframeRef.current).getPropertyValue("--max-items");
	// console.log(computed);
	// const maxItems = 12;
	return (
		<Section id="registry" headlineIcon={faGift}>
			<Content id="zola-iframe-container">
				<iframe
					// ref={iframeRef}
					id="zola-iframe"
					title="registry"
					src={`https://widget.zola.com/v1/widget/registry/aknoppwedding/html?maxItems=12&amp;partnerId=squarespace`}
					className="zola-registry-iframe"
					scrolling="no"
					style={{ height: "1200px", width: "100%", position: "relative" }}
					width="100%"
					frameBorder="0"
				/>
			</Content>
		</Section>
	)
}

export default Registry

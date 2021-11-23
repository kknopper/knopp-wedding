import * as React from 'react';
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import Section from '../section';
import Gallery from '@browniebroke/gatsby-image-gallery';
import styled from 'styled-components';

const StyledSection = styled(Section)`
	padding-bottom: 30px;
`;

//Add callback to Lightbox onCloseRequest
// const onClose = () => {
// 	// console.log('Lightbox was closed')
// }

const Photos = ({images}) => {

	return (
		<StyledSection id="photos" headlineIcon={faCameraRetro}>
			<Gallery
				images={images}
				// onClose={onClose}
			/>
		</StyledSection>
	)
}

export default Photos
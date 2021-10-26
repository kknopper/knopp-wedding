import * as React from 'react';
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import Section from '../section';
import Insta from '../insta';

const Photos = () => {
	return (
		<Section id="photos" headlineIcon={faCameraRetro}>
			<Insta/>
		</Section>
	)
}

export default Photos
import * as React from 'react';
// import styled from 'styled-components';
// import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";
import Section from '../section';
import FaqTree from '../tree';

const Faq = () => {
	return (
		<Section id="questions" headlineIcon={faQuestionCircle}>
			<FaqTree></FaqTree>
		</Section>
	)
}

export default Faq

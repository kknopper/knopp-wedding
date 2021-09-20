import * as React from 'react';
import styled from 'styled-components';
import Section from '../section';
import Form from '../rsvp-form';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


const StyledSection = styled(Section)`
	position: relative;
`

const Rsvp = () => {
	return (
		<StyledSection id="rsvp" headlineIcon={faEnvelope}>
			<Form />
		</StyledSection>
	)
}

export default Rsvp
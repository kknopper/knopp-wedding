import * as React from 'react';
import styled from 'styled-components';
import Section from '../section';
import Form from '../rsvp-form';

const StyledSection = styled(Section)`
	position: relative;
`

const Content = styled.div`
	grid-area: content;
`

const Rsvp = () => {
	return (
		<StyledSection id="rsvp">
			<Content className="rsvp">
				<Form />
			</Content>
		</StyledSection>
	)
}

export default Rsvp
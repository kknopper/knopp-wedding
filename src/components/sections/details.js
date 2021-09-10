import * as React from 'react';
import styled from 'styled-components';
import Section from '../section';
import CalendarButton from '../CalendarButton';
/* import { faRingsWedding } from "@fortawesome/free-solid-svg-icons"; */


const Content = styled.div`
	grid-area: content;
`

const Details = () => {
	return (
		<Section id="details" headlineText="The Wedding">
			<Content>
				<div className="when"></div>
				<div className="where"></div>
				<CalendarButton />
			</Content>
		</Section>
	)
}

export default Details
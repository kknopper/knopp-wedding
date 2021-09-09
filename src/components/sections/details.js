import * as React from 'react';
import styled from 'styled-components';
import Section from '../section';
import CalendarButton from '../CalendarButton';
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";


const Content = styled.div`
	grid-area: content;
`

const Details = () => {
	return (
		<Section id="details" headlineIcon={faInfoCircle}>
			<Content>
				<div className="when"></div>
				<div className="where"></div>
				<CalendarButton />
			</Content>
		</Section>
	)
}

export default Details
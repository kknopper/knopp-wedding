import * as React from 'react';
import styled from 'styled-components';
import { faHotel } from "@fortawesome/free-solid-svg-icons";
import hotelInfo from '../../hotels';
import Section from '../section';
import VenueMap from '../venue-map';

const StyledSection = styled(Section)`
	grid-area: accommodations;
`
const Hotels = styled.ul`
	display: block;
`;

const Hotel = styled.li`
	display: block;
`;

const Accommodations = () => {
	const [hotelData, setHotelData] = React.useState(null);
	const handleClick = (hotel) => {
		setHotelData(hotel);
	};

	return (
		<StyledSection id="accommodations" headlineIcon={faHotel}>
			<VenueMap hotel={hotelData} />
			<Hotels>
				{hotelInfo.map((hotel, index) => (
					<Hotel key={index + 1}>
						<h4>{hotel.name}</h4>
						<button onClick={() => handleClick(hotel)}> show on map</button>
					</Hotel>
				))}
			</Hotels>
		</StyledSection>
	)
}

export default Accommodations

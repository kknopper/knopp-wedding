import * as React from 'react';
import styled from 'styled-components';
import { faHotel} from "@fortawesome/free-solid-svg-icons";
import { breakpoint } from '../css-mixins';
import hotelInfo from '../../hotels';
import Section from '../section';
import VenueMap from '../venue-map';
import LocationCard from '../location-card';

const StyledSection = styled(Section)`
	grid-area: accommodations;
`;

const Hotels = styled.ul`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 15px;

	${breakpoint.medium`
		grid-template-columns: repeat(2, 1fr);
	`}
	
	${breakpoint.small`
		grid-template-columns: 1fr;
	`}
`;

const Accommodations = () => {
	//state for pointing to leaflet marker on the map
	const [hotelMapData, setHotelData] = React.useState({id: null});
	
	const updateMapState = (hotel) => {
		setHotelData(hotel);
	};

	const childLinkClick = (e) => {
		e.stopPropagation();
	};

	return (
		<StyledSection id="accommodations" headlineIcon={faHotel}>
			<VenueMap hotel={hotelMapData} updateHotelState={updateMapState} />
			<Hotels>
				{hotelInfo.map((hotel, index) => (
					<LocationCard place={hotel} data={hotelMapData} cardClick={updateMapState} cardButtonClick={childLinkClick} />
				))}
			</Hotels>
		</StyledSection>
	)
}

export default Accommodations

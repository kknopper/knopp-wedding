import * as React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHotel, faExternalLinkAlt, faPhone, faGlobe, faMapMarkerAlt, faMapMarkedAlt, faRoad, faDollarSign, faMoneyBillAlt} from "@fortawesome/free-solid-svg-icons";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import hotelInfo from '../../hotels';
import Section from '../section';
import VenueMap from '../venue-map';

const StyledSection = styled(Section)`
	grid-area: accommodations;
`
const Hotels = styled.ul`
	display: grid;
	grid-template-columns: auto auto;
`;

const Hotel = styled.li`
	display: block;
	text-align: left;
	border-radius: 10px;
	padding: 15px;
	transition: background-color 0.3s ease-in-out;

	a, address {
		display: block;
	}

	&.active {
		background-color: rgba(34,34,34, 0.3);
	}
`;

const HotelName = styled.h4`
	margin: 25px 0 15px;
`;

const Accommodations = () => {
	const [hotelData, setHotelData] = React.useState(null);

	const [hotelListState, setHotelListState] = React.useState(null);
	
	const handleClick = (hotel) => {
		setHotelData(hotel);
	};

	const setHotelState =(hotelId) => {
		setHotelListState(hotelId);
	}

	return (
		<StyledSection id="accommodations" headlineIcon={faHotel}>
			<VenueMap hotel={hotelData} hotelStateFunc={setHotelState} />
			<Hotels>
				{hotelInfo.map((hotel, index) => (
					<Hotel key={index + 1} id={hotel.id} className={(hotelListState === hotel.id) ? 'active hotel':'hotel'}>
						<HotelName>{hotel.name}</HotelName>
						<address><FontAwesomeIcon icon={faMapMarkedAlt} />Address: {hotel.address}</address>
						<a href={hotel.website} target="_blank"><FontAwesomeIcon icon={faGlobe}/>Website <FontAwesomeIcon icon={faExternalLinkAlt} /></a>
						<a href={`tel:+1-${hotel.phone}`}><FontAwesomeIcon icon={faPhone} /> 1-{hotel.phone}</a>
						<p><FontAwesomeIcon icon={faRoad} />Distance: {hotel.distance} miles from venue</p>
						<p><FontAwesomeIcon icon={faMoneyBillAlt} />Price: { [...Array(hotel.price.length)].map(() => <FontAwesomeIcon icon={faDollarSign} />) }</p>
						<AnchorLink
							to="/#accommodations"
							title="Accommodations"
							className="stripped"
							stripHash
							onAnchorLinkClick={() => {
								handleClick(hotel)
								setHotelState(hotel.id)
							}}
						><FontAwesomeIcon icon={faMapMarkerAlt} />show on map</AnchorLink>
					</Hotel>
				))}
			</Hotels>
		</StyledSection>
	)
}

export default Accommodations

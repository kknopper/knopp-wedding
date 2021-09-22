import * as React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHotel, faExternalLinkAlt, faPhone, faGlobe, faMapMarkerAlt, faMapMarkedAlt, faRoad, faDollarSign, faMoneyBillAlt} from "@fortawesome/free-solid-svg-icons";
import { rem, lighten } from "polished";
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
	grid-gap: 15px;
`;

const StateIcon = styled(FontAwesomeIcon)`
	position: absolute;
	color: #2974C0;
	top: 15px;
	right: 15px;
	opacity: 0;
	transition: opacity 0.3s ease-in-out;

	.active & {
		opacity: 1 !important;
	}
`;

const Hotel = styled.li`
	display: block;
	text-align: left;
	border-radius: 10px;
	padding: 15px;
	transition: background-color 0.3s ease-in-out;
	position: relative;
	cursor: pointer;

	a, address {
		display: block;
	}

	&:hover {
		background-color: ${lighten('0.65', 'rgba(34,34,34, 0.3)')};

		${StateIcon} {
			opacity: 0.75;
		}
	}

	&.active {
		background-color: ${lighten('0.45', 'rgba(34,34,34, 0.3)')};
		/* color: white; */
	}
`;

const HotelName = styled.h4`
	margin: 25px 0 15px;
`;

const ExtLinkIcon = styled(FontAwesomeIcon)`
	font-size: ${rem("12px")};
`;

const Accommodations = () => {
	//state for pointing to leaflet marker on the map
	const [hotelMapData, setHotelData] = React.useState({id: null});
	
	const updateMapState = (hotel) => {
		// console.log('state updated:', hotel)
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
					
					<Hotel key={index} id={hotel.id} className={(hotelMapData.id === hotel.id) ? 'active hotel':'hotel'}>
						<AnchorLink
							to="/#accommodations"
							title="Accommodations"
							className="stripped"
							stripHash
							onAnchorLinkClick={() => {
								updateMapState(hotel)
							}}
						>
						<HotelName>{hotel.name}</HotelName>
						<address><FontAwesomeIcon icon={faMapMarkerAlt} />Address: {hotel.address}</address>
						<a href={hotel.website} onClick={(e) => childLinkClick(e)} target="_blank"><FontAwesomeIcon icon={faGlobe}/>Website <ExtLinkIcon icon={faExternalLinkAlt} /></a>
						<a href={`tel:+1-${hotel.phone}`} onClick={(e) => childLinkClick(e)}><FontAwesomeIcon icon={faPhone} rotation={90}/> 1-{hotel.phone}</a>
						<p><FontAwesomeIcon icon={faRoad} />Distance: {hotel.distance} miles from venue</p>
						<p><FontAwesomeIcon icon={faMoneyBillAlt} />Price: { [...Array(hotel.price.length)].map(() => <FontAwesomeIcon icon={faDollarSign} />) }</p>
						
						<StateIcon icon={faMapMarkerAlt} />
						</AnchorLink>
					</Hotel>
				))}
			</Hotels>
		</StyledSection>
	)
}

export default Accommodations

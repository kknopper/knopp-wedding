import * as React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHotel, faStar, faStarHalfAlt, faExternalLinkAlt, faPhone, faGlobe, faMapMarkerAlt, faCarAlt, faDollarSign} from "@fortawesome/free-solid-svg-icons";
import { rem, lighten } from "polished";
import { breakpoint } from '../css-mixins';
import { AnchorLink } from "gatsby-plugin-anchor-links";
import hotelInfo from '../../hotels';
import Section from '../section';
import VenueMap from '../venue-map';

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

const Hotel = styled.li`
	display: block;
	text-align: left;
	border-radius: 10px;
	border: 2px solid ${lighten('0.35', 'rgba(34,34,34, 0.3)')};
	padding: 15px;
	transition: background-color 0.3s ease-in-out;
	position: relative;

	address {
		display: block;
	}

	&.active {
		background-color: ${lighten('0.65', 'rgba(34,34,34, 0.3)')};
	}
`;

const HotelName = styled.h4`
	margin: 25px 0 25px;

	${breakpoint.xsmall`
		font-size: ${rem(20)}
	`}
`;

const Info = styled.span`
	display: block;
	font-size: ${rem("12px")};
	padding-top: 10px;
	padding-left: 35px;
`;

const Span = styled.span`
	display: inline-flex;
	align-items: center;
	padding-left: 5px;
	width: 85%;
`;

const ButtonGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: auto;
	grid-gap: 15px;

	${breakpoint.xsmall`
		grid-template-columns: 1fr;
		grid-template-rows: auto auto;
	`}
`;

const StyledLink = styled.a`
	z-index: 1;
	position: relative;
	border-radius: 5px;
	font-family: 'Blooming Elegant Sans';
	border: none;
	cursor: pointer;
	display: flex;
	align-items: center;
	position: relative;
	margin: 0 auto;
	transition: opacity 0.3s ease-in-out;
	background: #fff;
	border: 2px solid var(--theme-text);
	color: var(--theme-text);
	box-sizing: border-box;
	width: 100%;
	padding: 10px;
	font-size: ${rem("25px")};
	text-align: center;
	display: flex;
	justify-content: center;

	span {
		padding-left: 10px;
		padding-right: 10px;
	}
`;

const ExtLinkIcon = styled(FontAwesomeIcon)`
	font-size: ${rem("12px")};
	padding-left: 5px;
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

const StyledAnchor = styled(AnchorLink)`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;

	&:hover ~ ${StateIcon} {
		opacity: 0.75;
	}
`

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
					<Hotel key={index} id={hotel.id} className={(hotelMapData.id === hotel.id) ? 'active hotel':'hotel'}>
						<HotelName>
							<FontAwesomeIcon icon={faHotel} />
							<Span>{hotel.name}</Span>
							<Info>
								{[...Array(Math.floor(hotel.stars))].map((star, i) => <FontAwesomeIcon key={i} icon={faStar} />)}
								{(hotel.stars  % 1 !== 0) ? <FontAwesomeIcon icon={faStarHalfAlt} /> : ''}
								<span> &bull; </span>
								{[...Array(hotel.price.length)].map((price, i) => <FontAwesomeIcon key={i} icon={faDollarSign} />)}
							</Info>
						</HotelName>
						<address><FontAwesomeIcon icon={faMapMarkerAlt} /><Span>{hotel.address}</Span></address>
						<p><FontAwesomeIcon icon={faCarAlt} /><Span>{hotel.distance} miles from venue</Span></p>
						<ButtonGrid>
							<StyledLink 
								href={`tel:+1-${hotel.phone}`}
								onClick={(e) => childLinkClick(e)}
							>
								<FontAwesomeIcon icon={faPhone} rotation={90}/>
								{/* <Span>1-{hotel.phone}</Span> */}
								<Span>Call</Span>
							</StyledLink>
							<StyledLink 
								href={hotel.website}
								onClick={(e) => childLinkClick(e)}
								target="_blank" rel="noopener noreferer"
							>
								<FontAwesomeIcon icon={faGlobe}/>
								<Span>Website <ExtLinkIcon icon={faExternalLinkAlt} /></Span>
							</StyledLink>
						</ButtonGrid>
						<StyledAnchor
							to="/#accommodations"
							className="stripped"
							stripHash
							alt="Show on map"
							onAnchorLinkClick={() => {
								updateMapState(hotel)
							}}
						></StyledAnchor>
						<StateIcon icon={faMapMarkerAlt} />
					</Hotel>
				))}
			</Hotels>
		</StyledSection>
	)
}

export default Accommodations

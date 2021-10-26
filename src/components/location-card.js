import * as React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHotel, faStar, faStarHalfAlt, faExternalLinkAlt, faPhone, faGlobe, faMapMarkerAlt, faCarAlt, faDollarSign, faPlane, faPlaneDeparture} from "@fortawesome/free-solid-svg-icons";
import { rem, lighten } from "polished";
import { breakpoint } from './css-mixins';
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Card = styled.li`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
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

const IconText = styled.span`
	display: inline-flex;
	align-items: center;
	padding-left: 5px;
	max-width: 85%;
`;

const PlaceName = styled.h3`
	margin: 25px 0 25px;
	font-size: 1.25em;

	${breakpoint.small`
		font-size: 1.5em
	`}

	${breakpoint.xsmall`
		font-size: ${rem(20)}
	`}

	${IconText} {
		flex-direction: column;
		align-items: flex-start;
	}
`;

const Info = styled.span`
	display: block;
	font-size: ${rem("12px")};
	padding-top: 10px;
	padding-left: 3px;
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

const PlaceCode = styled.p`
	margin-top: 0;

	code {
		margin-left: 5px;
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

const LocationCard = ({place, data, cardClick, cardButtonClick}) => {
	return (
		<Card id={place.id} className={(place.type === 'hotel' && data.id === place.id) ? `active ${place.type}` : `${place.type}`}>
			<PlaceName>
				<FontAwesomeIcon icon={place.type === 'hotel' ? faHotel : faPlaneDeparture} />
				<IconText>
					{place.name}
					{place.type === 'hotel' ? (
						<Info>
							{[...Array(Math.floor(place.stars))].map((star, i) => <FontAwesomeIcon key={i} icon={faStar} />)}
							{(place.stars  % 1 !== 0) ? <FontAwesomeIcon icon={faStarHalfAlt} /> : ''}
							<span> &bull; </span>
							{[...Array(place.price.length)].map((price, i) => <FontAwesomeIcon key={i} icon={faDollarSign} />)}
						</Info>
					) : ''}
				</IconText>
			</PlaceName>
			<div>
				{place.type === 'airport' ? (
					<PlaceCode><FontAwesomeIcon icon={faPlane} /><IconText>Airport Code:<code>{place.id.toUpperCase()}</code></IconText></PlaceCode>
				) : '' }
				<address><FontAwesomeIcon icon={faMapMarkerAlt} /><IconText>{place.address}</IconText></address>
				<p><FontAwesomeIcon icon={faCarAlt} /><IconText>{place.distance} miles from venue{place.type === 'airport' ? `; Approx. ${place.time} minutes` : ''} </IconText></p>
				<ButtonGrid>
					<StyledLink 
						href={`tel:+1-${place.phone}`}
						onClick={cardButtonClick || null}
						>
						<FontAwesomeIcon icon={faPhone} rotation={90}/>
						{/* <IconText>1-{place.phone}</IconText> */}
						<IconText>Call</IconText>
					</StyledLink>
					<StyledLink 
						href={place.website}
						onClick={cardButtonClick || null}
						target="_blank" rel="noopener noreferer"
						>
						<FontAwesomeIcon icon={faGlobe}/>
						<IconText>Website <ExtLinkIcon icon={faExternalLinkAlt} /></IconText>
					</StyledLink>
				</ButtonGrid>
				{place.type === 'hotel' ? (
					<StyledAnchor
						to="/#accommodations"
						className="stripped"
						stripHash
						alt="Show on map"
						onAnchorLinkClick={() => {
							cardClick(place)
						}}
					></StyledAnchor>
				) : ''}
				<StateIcon icon={faMapMarkerAlt} />
			</div>
		</Card>
	)
}

export default LocationCard

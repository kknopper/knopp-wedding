import * as React from 'react';
import styled from "styled-components";
import ModalButton from "./modal-button"
import {isIOS, isMacOs} from 'react-device-detect';
import { rem } from "polished";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDirections, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faApple, faGoogle, faWaze } from "@fortawesome/free-brands-svg-icons";

const StyledText = styled.span`
	padding-left: 10px;
`

const ExtLinkIcon = styled(FontAwesomeIcon)`
	font-size: 16px;
	font-size: ${rem("12px")};
`

const ModalLinks = styled.a`
	display: flex;
	align-items: center;
	padding: 10px;

	&:hover {
		color: black;
	}
`

const DirectionsButton = ({location}) => {
	const directions = {
		venue: {
			apple: {
				ios: 'maps://?address=5401%20Graham%20Hill%20Rd,%20Felton,%20CA%20%2095018,%20United%20States&auid=11055945268064872645&ll=37.040723,-122.062440&lsp=9902&q=Roaring%20Camp%20Railroads&_ext=CjIKBQgEEOIBCgQIBRADCgQIBhBzCgQIChAACgQIUhAHCgQIVRAOCgQIWRABCgUIpAEQARImKYoi/xgwhUJAMTZ09RlyhF7AOQj4JHVWhkJAQcyv7rO5g17AUAQ%3D',
				normal: 'https://duckduckgo.com/?q=roaring+camp+railroads&t=hy&va=g&ia=web&iaxm=places'
			},
			google: 'https://goo.gl/maps/97ztJtGB9Avb4uH39',
			waze: 'https://ul.waze.com/ul?preview_venue_id=155910514.1559367288.290454&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location'
		}
	}

	const appleLink = (isIOS || isMacOs) ? directions[location].apple.ios : directions[location].apple.normal;
	const googleLink = directions[location].google;
	const wazeLink = directions[location].waze;
	console.log(appleLink);
	return (
		<ModalButton buttonText='Get Directions' faIcon={faDirections}>
			<ul>
				<li>
					<ModalLinks href={appleLink} target="_blank" rel="noopener noreferrer">
						{(isIOS || isMacOs) ? directions[location].apple.ios :'broken'}
						{/* <FontAwesomeIcon icon={faApple} /> */}
						<StyledText>Apple <ExtLinkIcon icon={faExternalLinkAlt} /></StyledText>
					</ModalLinks>
				</li>
				<li>
					<ModalLinks href={googleLink} target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faGoogle} />
						<StyledText>Google <ExtLinkIcon icon={faExternalLinkAlt} /></StyledText>
					</ModalLinks>
				</li>
				<li>
					<ModalLinks href={wazeLink} target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faWaze} />
						<StyledText>Waze <ExtLinkIcon icon={faExternalLinkAlt} /></StyledText>
					</ModalLinks>
				</li>
			</ul>
		</ModalButton>
	)
}

export default DirectionsButton
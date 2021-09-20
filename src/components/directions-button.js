import * as React from 'react';
import styled from "styled-components";
import ModalButton from "./modal-button"
import {isIOS, isMacOs} from 'react-device-detect';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDirections } from "@fortawesome/free-solid-svg-icons";
import { faApple, faGoogle, faWaze } from "@fortawesome/free-brands-svg-icons";

const StyledText = styled.span`
	padding-left: 10px;
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
				ios: 'https://maps.apple.com/?address=5401%20Graham%20Hill%20Rd,%20Felton,%20CA%20%2095018,%20United%20States&auid=11055945268064872645&ll=37.040723,-122.062440&lsp=9902&q=Roaring%20Camp%20Railroads&_ext=CjIKBQgEEOIBCgQIBRADCgQIBhBzCgQIChAACgQIUhAHCgQIVRAOCgQIWRABCgUIpAEQARImKYoi/xgwhUJAMTZ09RlyhF7AOQj4JHVWhkJAQcyv7rO5g17AUAQ%3D',
				normal: 'https://duckduckgo.com/?q=roaring+camp+railroads&t=hy&va=g&ia=web&iaxm=places'
			},
			google: {
				ios: 'maps://goo.gl/maps/97ztJtGB9Avb4uH39',
				normal: 'https://goo.gl/maps/97ztJtGB9Avb4uH39'
			},
			waze: {
				ios: 'waze://?preview_venue_id=155910514.1559367288.290454&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location',
				normal: 'https://ul.waze.com/ul?preview_venue_id=155910514.1559367288.290454&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location'
			}
		}
	}
	return (
		<ModalButton buttonText='Get Directions' faIcon={faDirections}>
			<ul>
				<li>isIOS? {`${isIOS}`}</li>
				<li>isMac? {`${isMacOs}`}</li>
				<li>is ios or mac? {`${(isIOS || isMacOs)}`}</li>
				<li>
					<ModalLinks href={(isIOS || isMacOs) ? directions[location].apple.ios : directions[location].apple.normal} target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faApple} />
						<StyledText>Apple</StyledText>
					</ModalLinks>
				</li>
				<li>
					<ModalLinks href={isIOS ? directions[location].google.ios : directions[location].google.normal} target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faGoogle} />
						<StyledText>Google</StyledText>
					</ModalLinks>
				</li>
				<li>
					<ModalLinks href={isIOS ? directions[location].waze.ios : directions[location].waze.normal} target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faWaze} />
						<StyledText>Waze</StyledText>
					</ModalLinks>
				</li>
			</ul>
		</ModalButton>
	)
}

export default DirectionsButton
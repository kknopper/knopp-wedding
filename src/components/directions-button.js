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
	const [isLoaded, rehydrate] = React.useState(false);

	React.useEffect(() => {
		rehydrate(true);
	}, []);

	const directions = {
		venue: {
			apple: {
				ios: 'maps://?address=5401%20Graham%20Hill%20Rd,%20Felton,%20CA%20%2095018,%20United%20States&auid=11055945268064872645&ll=37.040723,-122.062440&lsp=9902&q=Roaring%20Camp%20Railroads&_ext=CjIKBQgEEOIBCgQIBRADCgQIBhBzCgQIChAACgQIUhAHCgQIVRAOCgQIWRABCgUIpAEQARImKYoi/xgwhUJAMTZ09RlyhF7AOQj4JHVWhkJAQcyv7rO5g17AUAQ%3D',
				normal: 'https://duckduckgo.com/?q=roaring+camp+railroads&t=hy&va=g&ia=web&iaxm=places'
			},
			google: 'https://goo.gl/maps/97ztJtGB9Avb4uH39',
			waze: 'https://ul.waze.com/ul?preview_venue_id=155910514.1559367288.290454&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location'
		},
		sheraton: {
			apple: {
				ios: 'maps://?address=5030%20Scotts%20Valley%20Dr,%20Scotts%20Valley,%20CA%20%2095066,%20United%20States&auid=7232579756596382434&ll=37.054107,-122.012138&lsp=9902&q=Four%20Points%20by%20Sheraton&_ext=CjIKBQgEEOIBCgQIBRADCgQIBhALCgQIChAACgQIUhADCgQIVRANCgQIWRABCgUIpAEQARIkKUs1s4dYhkJAMekOYT4igV7AOckK2eN+h0JAQY3LudJpgF7A',
				normal: 'https://duckduckgo.com/?q=four+points+by+sheraton+scotts+valley&t=h_&iax=images&ia=images&iaxm=places'
			},
			google: 'https://goo.gl/maps/mSMjUg9ouh35KWvR6',
			waze: 'https://ul.waze.com/ul?place=ChIJ80NE_kpHjoARTUptUH8j6rk&ll=37.05406310%2C-122.01208490&navigate=yes&utm_campaign=waze_website&utm_source=waze_website&utm_medium=lm_share_location'
		}
	}

	return (
		<ModalButton buttonText='Get Directions' faIcon={faDirections}>
			<ul>
				<li>
					<ModalLinks key={isLoaded} href={(isIOS || isMacOs) ? directions[location].apple.ios : directions[location].apple.normal } target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faApple} />
						<StyledText>Apple <ExtLinkIcon icon={faExternalLinkAlt} /></StyledText>
					</ModalLinks>
				</li>
				<li>
					<ModalLinks href={directions[location].google} target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faGoogle} />
						<StyledText>Google <ExtLinkIcon icon={faExternalLinkAlt} /></StyledText>
					</ModalLinks>
				</li>
				<li>
					<ModalLinks href={directions[location].waze} target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faWaze} />
						<StyledText>Waze <ExtLinkIcon icon={faExternalLinkAlt} /></StyledText>
					</ModalLinks>
				</li>
			</ul>
		</ModalButton>
	)
}

export default DirectionsButton
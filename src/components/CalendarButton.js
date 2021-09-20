import * as React from 'react';
import styled from "styled-components";
import ModalButton from "./ModalButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDay, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faApple, faGoogle, faMicrosoft, faYahoo } from "@fortawesome/free-brands-svg-icons";

const StyledText = styled.span`
	padding-left: 10px;
`

const ExtLinkIcon = styled(FontAwesomeIcon)`
	font-size: 0.5em;
`

const ModalLinks = styled.a`
	display: flex;
	align-items: center;
	padding: 10px;
`

const CalendarButton = ({linkId}) => {

	return (
		<ModalButton buttonText='Add To Calendar' faIcon={faCalendarDay}>
			{/* Edit Links: */}
			{/* https://calndr.link/events/zCAqaaenwN?secret=e8SeMx1oI04N4Xh06stLMfyeQa7LBglq4Vd6 */}
			<ul>
				<li>
					<ModalLinks href={`https://calndr.link/e/${linkId}?s=apple`}>
						<FontAwesomeIcon icon={faApple} />
						<StyledText>Apple</StyledText>
					</ModalLinks>
				</li>
				<li>
					<ModalLinks href={`https://calndr.link/e/${linkId}?s=google`} target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faGoogle} />
						<StyledText>Google <ExtLinkIcon icon={faExternalLinkAlt} /></StyledText>
					</ModalLinks>
				</li>
				<li>
					<ModalLinks href={`https://calndr.link/e/${linkId}?s=office365`} target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faMicrosoft} />
						<StyledText>Office 365 <ExtLinkIcon icon={faExternalLinkAlt} /></StyledText>
					</ModalLinks>
				</li>
				<li>
					<ModalLinks href={`https://calndr.link/e/${linkId}?s=outlookcom`} target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faMicrosoft} />
						<StyledText>Outlook Web <ExtLinkIcon icon={faExternalLinkAlt} /></StyledText>
					</ModalLinks>
				</li>
				<li>
					<ModalLinks href={`https://calndr.link/e/${linkId}?s=outlook`}>
						<FontAwesomeIcon icon={faMicrosoft} />
						<StyledText>Outlook</StyledText>
					</ModalLinks>
				</li>
				<li>
					<ModalLinks href={`https://calndr.link/e/${linkId}?s=yahoo`} target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faYahoo} />
						<StyledText>Yahoo <ExtLinkIcon icon={faExternalLinkAlt} /></StyledText>
					</ModalLinks>
				</li>
			</ul>
		</ModalButton>
	)
}

export default CalendarButton
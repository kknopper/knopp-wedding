import * as React from 'react';
import styled from "styled-components";
import ModalButton from "./ModalButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";
import { faApple, faGoogle, faMicrosoft, faYahoo } from "@fortawesome/free-brands-svg-icons";

const StyledText = styled.span`
	padding-left: 10px;
`

const ModalLinks = styled.a`
	display: flex;
	align-items: center;
	padding: 10px;

	&:active {
		color: black;
	}
`

const CalendarButton = () => {

	return (
		<ModalButton buttonText='Add To Calendar' faIcon={faCalendarDay}>
			{/* Edit Links: */}
			{/* https://calndr.link/events/zCAqaaenwN?secret=e8SeMx1oI04N4Xh06stLMfyeQa7LBglq4Vd6 */}
			<ul>
				<li>
					<ModalLinks href="https://calndr.link/e/zCAqaaenwN?s=apple">
						<FontAwesomeIcon icon={faApple} />
						<StyledText>Apple</StyledText>
					</ModalLinks>
				</li>
				<li>
					<ModalLinks href="https://calndr.link/e/zCAqaaenwN?s=google">
						<FontAwesomeIcon icon={faGoogle} />
						<StyledText>Google</StyledText>
					</ModalLinks>
				</li>
				<li>
					<ModalLinks href="https://calndr.link/e/zCAqaaenwN?s=office365">
						<FontAwesomeIcon icon={faMicrosoft} />
						<StyledText>Office 365</StyledText>
					</ModalLinks>
				</li>
				<li>
					<ModalLinks href="https://calndr.link/e/zCAqaaenwN?s=outlookcom">
						<FontAwesomeIcon icon={faMicrosoft} />
						<StyledText>Outlook Web</StyledText>
					</ModalLinks>
				</li>
				<li>
					<ModalLinks href="https://calndr.link/e/zCAqaaenwN?s=outlook">
						<FontAwesomeIcon icon={faMicrosoft} />
						<StyledText>Outlook5</StyledText>
					</ModalLinks>
				</li>
				<li>
					<ModalLinks href="https://calndr.link/e/zCAqaaenwN?s=yahoo">
						<FontAwesomeIcon icon={faYahoo} />
						<StyledText>Yahoo</StyledText>
					</ModalLinks>
				</li>
			</ul>
		</ModalButton>
	)
}

export default CalendarButton
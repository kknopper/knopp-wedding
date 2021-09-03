import * as React from 'react';
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons"
import { faApple, faGoogle, faMicrosoft, faYahoo } from "@fortawesome/free-brands-svg-icons"
import useToggle from "./useToggle"

const StyledCalendarButton = styled.button`
	border-radius: 5px;
	background: lightblue;
	padding: 15px;
	font-size: 25px;
	border: none;
	cursor: pointer;
	display: flex;
	align-items: center;

	&.modal-active {
		pointer-events: none;
	}
`

const StyledText = styled.span`
	padding-left: 10px;
`

const Modal = styled.div`
	opacity: 0;
	transition: opacity 0.3s ease-in-out;
	pointer-events: none;
	display: block;
	border-radius: 5px;
	position: absolute;
	background: lightblue;

	.modal-active & {
		opacity: 1;
		pointer-events: auto;
	}
`

const ModalLinks = styled.a`
	display: flex;
	align-items: center;
	padding: 10px;

	&:hover {
		color: red;
	}
`

const CalendarButton = () => {
	const modalRef = React.useRef(null);
	const [isVisible, toggleModal] = useToggle();
	
	const handleClick = (e) => {
		if (modalRef.current.contains(e.target)  && !isVisible) {
			e.preventDefault();
			console.log('click')
		}
		toggleModal();
	}

	const handleClickOutside = e => {
		if (!modalRef.current.contains(e.target) && isVisible) {
			toggleModal();
		}
	};

	React.useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	});

	return (
		<StyledCalendarButton onClick={handleClick} className={isVisible ? 'modal-active': ''}>
			<FontAwesomeIcon icon={faCalendarDay} />
			<StyledText>Add To Calendar</StyledText>
			<Modal ref={modalRef}>
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
			</Modal>
		</StyledCalendarButton>
	)
}

export default CalendarButton
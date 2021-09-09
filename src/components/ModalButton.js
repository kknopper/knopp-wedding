import * as React from 'react';
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import useToggle from "./useToggle"

const StyledModalButton = styled.button`
	border-radius: 5px;
	background: lightblue;
	padding: 15px;
	font-size: 25px;
	border: none;
	cursor: pointer;
	display: flex;
	align-items: center;
	position: relative;

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
	z-index: 1;
	background: lightblue;
	width: 100%;
	left: 0;

	.modal-active & {
		opacity: 1;
		pointer-events: auto;
	}
`

const ModalButton = ({buttonText, faIcon, children}) => {
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
		<StyledModalButton onClick={handleClick} className={isVisible ? 'modal-active': ''}>
			<FontAwesomeIcon icon={faIcon} />
			<StyledText>{buttonText}</StyledText>
			<Modal ref={modalRef}>
				{children}
			</Modal>
		</StyledModalButton>
	)
}

export default ModalButton
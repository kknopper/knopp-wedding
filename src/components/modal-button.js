import * as React from 'react';
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import useToggle from "./useToggle"

const StyledIcon = styled(FontAwesomeIcon)`
	transition: all 0.3s ease-in-out;
`;

const StyledModalButton = styled.button`
	border-radius: 5px;
	padding: 15px;
	font-size: 25px;
	font-family: 'Blooming Elegant Sans';
	border: none;
	cursor: pointer;
	display: flex;
	align-items: center;
	position: relative;
	margin: 0 auto;
	transition: all 0.3s ease-in-out;
	background: #fff;
	border: 2px solid var(--theme-text);
	color: var(--theme-text);
	box-sizing: border-box;

	&.modal-active {
		pointer-events: none;
	}

	&:hover {
		/* background: lightgreen; */
		/* border: 2px solid lightgreen; */
		/* color: white; */
		${StyledIcon} {
			transform: scale(1.1);
			/* color: white; */
		}
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
	color: var(--theme-text);
	background: var(--theme-bg);
	border: 2px solid var(--theme-text);
	width: calc(100% + 4px);
	box-sizing: border-box;
	left: -2px;
	overflow: hidden;

	.modal-active & {
		opacity: 1;
		pointer-events: auto;
	}

	a {
		background: var(--theme-bg);
		color: var(--theme-color);
		transition: all 0.3s ease-in-out;

		&:hover {
			color: var(--theme-bg) !important;
			background: var(--theme-text);
		}

		&:visited {
			color: inherit;
		}

		&:active {
			color: inherit;
		}
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
			<StyledIcon icon={faIcon} />
			<StyledText>{buttonText}</StyledText>
			<Modal ref={modalRef}>
				{children}
			</Modal>
		</StyledModalButton>
	)
}

export default ModalButton
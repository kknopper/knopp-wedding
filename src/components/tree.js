import React, { useRef, useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare, faMinusSquare } from '@fortawesome/free-regular-svg-icons'
import { faCheckSquare, faLink, faUserTie } from '@fortawesome/free-solid-svg-icons'
import useMeasure from 'react-use-measure'
import styled from 'styled-components'
import { useSpring, a } from '@react-spring/web'
import { animated } from '@react-spring/web'

const Container = styled('div')`
	width: 75%;
	height: 100%;
	margin: 0 auto;
	padding: 0;
	/* background: #191b21; */
	overflow: hidden;
	/* font-family: ui-monospace, monospace; */
	font-size: 24px;
	line-height: 35px;
	user-select: none;
	height: 100%;
	text-align: left;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: flex-start;
`

const Frame = styled('div')`
	position: relative;
	padding:10px 0px 0px 0px;
	text-overflow: ellipsis;
	/* white-space: nowrap; */
	overflow-x: hidden;
	vertical-align: middle;
`

const Question = styled('div')`
	position: relative;
	display: inline-block;
	cursor: pointer;
`

const Answer = styled('div')`
	position: relative;
	display: flex;
`

const Title = styled('span')`
	vertical-align: middle;
`

const Content = styled(animated.div)`
	will-change: transform, opacity, height;
	margin-left: 10px;
	padding: 0px 0px 0px 14px;
	border-left: 4px double rgba(34, 34, 34, 0.5);
	overflow: hidden;
`

const toggle = {
	width: '1em',
	height: '1em',
	marginRight: 10,
	verticalAlign: 'middle',
}


function usePrevious(value) {
	const ref = useRef()
	useEffect(() => void (ref.current = value), [value])
	return ref.current
}

const Tree = React.memo(({ children, content, icon, style, defaultOpen = false }) => {
	const [isOpen, setOpen] = useState(defaultOpen)
	const previous = usePrevious(isOpen)
	const [ref, { height: viewHeight }] = useMeasure()
	const { height, opacity, y } = useSpring({
		from: { height: 0, opacity: 0, y: 0 },
		to: {
			height: isOpen ? viewHeight : 0,
			opacity: isOpen ? 1 : 0,
			y: isOpen ? 0 : 20,
		},
	})

	return (
		<Frame>
			{children ? (
				<Question onClick={() => setOpen(!isOpen)}>
					<FontAwesomeIcon icon={children ? (isOpen ? faMinusSquare : faPlusSquare) : faCheckSquare} style={{ ...toggle, opacity: children ? 1 : 0.3 }} />
					<Title style={style}>{content}</Title>
				</Question>
			): (
				<Answer>
					<FontAwesomeIcon icon={icon || faCheckSquare} style={{ ...toggle, opacity: 0.3, paddingTop: 6 }} />
					<Title style={style}>{content}</Title>
				</Answer>
			)}
			
			<Content style={{opacity, height: isOpen && previous === isOpen ? 'auto' : height,}}>
				<a.div ref={ref} style={{ y }} children={children} />
			</Content>
		</Frame>
	)
})

export default function FaqTree() {
	return (
	<Container>
		<Tree content="What is Roaring Camp?">
			<Tree content="The dream of preserving a piece of the 1880s and early California was the dream of Roaring Camps Founder F. Norman Clark. Roaring Camp’s steam engines date from 1890 and are among the oldest and most authentically preserved narrow-gauge steam engines providing regularly scheduled passenger service in America." />
			<Tree content={<a>learn more</a>} icon={faLink} />
		</Tree>
		<Tree content="Is this a themed wedding?">
			<Tree icon={faUserTie} content="Nope! Normal wedding attire is just fine 👔 👗" />
		</Tree>
	</Container>
	)
}

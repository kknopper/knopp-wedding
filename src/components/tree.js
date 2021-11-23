import React, { useRef, useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare, faMinusSquare } from '@fortawesome/free-regular-svg-icons'
import { faCheckSquare, faLink, faUserTie, faLocomotive, faCoffee } from '@fortawesome/free-solid-svg-icons'
import useMeasure from 'react-use-measure';
import styled from 'styled-components';
import { breakpoint } from './css-mixins';
import { useSpring, animated, config} from '@react-spring/web';

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

	${breakpoint.medium`
		width: 90%;
	`}

	${breakpoint.small`
		width: 100%;
	`}
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
			
			<Content style={{config: config.slow, opacity, height: isOpen && previous === isOpen ? 'auto' : height,}}>
				<animated.div ref={ref} style={{ y }} children={children} />
			</Content>
		</Frame>
	)
})

export default function FaqTree() {
	return (
	<Container>
		<Tree content="What's with the train?">
			<Tree content="Roaring Camp is a vintage train-depot. Your invitation includes complementary tickets to ride the steam train. All guests will need to board the train which will take you on a 15 minute ride to the cathedral grove, where our ceremony will take place, after which we'll ride back to Roaring Camp, where our reception will be held. All Aboard!" />
			<Tree content="I don't like trains" icon={faLocomotive}>
				<Tree content="If for whatever reason you don't want to ride the train, let us know in the RSVP form, so we can make special accommodations" icon={faLocomotive} />
			</Tree>
		</Tree>
		<Tree content="What is Roaring Camp?">
			<Tree content="Roaring Camp Railroads is a vintage train-depot camp nestled in one of the most stunning valleys of old-growth Redwoods in the coastal Santa Cruz Mountains. Their steam engines date from 1890 and are among the oldest and most authentically preserved narrow-gauge steam engines providing regularly scheduled passenger service in America." />
			<Tree content={<a href="https://www.roaringcamp.com/historical-facts" target="_blank" rel="noopener noreferrer">Learn more about the history of Roaring Camp</a>} icon={faLink} />
		</Tree>
		<Tree content="What should I wear?">
			<Tree content="Ladies we would recommend not wearing heels. The cathedral grove is on a slope with uneven ground and it will be a standing ceremony. Guests will also have to board & unboard the train, so wear shoes comfortable for some mobility."icon={faUserTie}/>
			<Tree content="Is this a themed wedding?">
				<Tree icon={faUserTie} content="Nope! Normal wedding attire is just fine 👔 👗" />
			</Tree>
		</Tree>
		<Tree content="Breakfast?">
			<Tree content="Yes, Breakfast. On us. Show up when you wake up, (as long as that's before 1pm!) and join us for a casual hangout before you hit the road." icon={faCoffee}/>
		</Tree>
	</Container>
	)
}

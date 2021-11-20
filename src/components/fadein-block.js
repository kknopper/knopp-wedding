import * as React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { useInView, InView } from "react-intersection-observer";
import trainWhistle from '../audio/train-whistle.m4a';

const Fade = styled(animated.div)`
	display: block;
`

const AudioTag = styled.audio`
	visibility: hidden;
`;

const FadeIn = ({playAudio, children}) => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		rootMargin: '-200px 0px',
	});

	const [audioFile] = React.useState(new Audio(trainWhistle));
	// console.log(audioFile)
	const [playing, setPlaying] = React.useState(false);

	const toggleAudio = () => setPlaying(!playing);

	React.useEffect(() => {
		playing ? audioFile.play() : audioFile.pause();
		console.log('playing', playing);
	},
		[playing]
	);

	React.useEffect(() => {
		audioFile.addEventListener('ended', () => setPlaying(false));
		return () => {
			audioFile.removeEventListener('ended', () => setPlaying(false));
		};
	}, []);


	const animation = useSpring({ to: { opacity: inView ? 1 : 0, y: inView ? 0 : -30}, from: { opacity: 0, y: -30 }, config: { duration: 400 }, });

	return (
		<Fade ref={ref} style={animation}>
			{playAudio ? 
				<InView triggerOnce="true" onChange={(inView, entry) => {if (inView) toggleAudio()}} />
			: null}
			{children}
		</Fade>
	)
}

export default FadeIn
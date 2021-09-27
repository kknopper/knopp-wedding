import { useState, useLayoutEffect } from 'react';

let width, height;

if (typeof window !== `undefined`) {
	width = window.innerWidth;
	height = window.innerHeight;
}

// function getWindowDimensions() {	
// 	return {
// 		width: window.innerWidth,
// 		height:  window.innerHeight
// 	};
// }

export default function useWindowDimensions() {
	const [windowDimensions, setWindowDimensions] = useState({
		width, height
	});

	useLayoutEffect(() => {
		function handleResize() {
			setWindowDimensions({
				width: window.innerWidth,
				height:  window.innerHeight
			});
		}

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return windowDimensions;
}
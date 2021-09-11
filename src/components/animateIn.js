import { useInView } from "react-intersection-observer"

const AnimateIn = ({ threshold = 0.15, triggerOnce = false, ...remainingProps }) => {
	const [ref, inView] = useInView({ threshold, triggerOnce })

	return (
	<div
		ref={ref}
		style={{
			// adjust these as desired
			transition: "opacity 300ms, transform 300ms",
			opacity: inView ? 1 : 0,
			transform: `translateY(${inView ? 0 : 100}px)`,
		}}
		{...remainingProps}
	/>
	)
}

export default AnimateIn
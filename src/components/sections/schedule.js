import * as React from 'react';
import styled from 'styled-components';
import { StaticImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { em } from "polished";
import { breakpoint } from "../css-mixins";
import FadeIn from '../fadein-block';
import Section from '../section';
import CalendarButton from '../calendar-button';
import DirectionsButton from '../directions-button';

/* import { faRingsWedding } from "@fortawesome/free-solid-svg-icons"; */


const RingsIcon = styled.svg`
	font-size: ${em('38px')};
`

const Event = styled.div`
	padding: 35px 0;
`

const StyledIcon = styled(FontAwesomeIcon)`
	font-size: ${em('32px')};
`;

const H3 = styled.h3`
	margin-top: 15px;
	margin-bottom: 10px;
`;

const H4 = styled.h4`
	margin-bottom: 10px;
`;

const H5 = styled.h5`
	margin-bottom: 10px;
	margin-top: 0;
`;

const Time = styled.time`
	font-style: italic;
`;

const Address = styled.address`
	margin-bottom: 35px;
	
	p {
		margin-bottom: 0;

		&:last-child {
			margin-top: 8px;
		}
	}
`;

const Buttons = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	width: 100%;
	max-width: 420px;
	margin: 0 auto;

	${breakpoint.small`
		max-width: 375px;

		button:first-child {
			margin-bottom: 20px;
		}
	`}
`;

const Schedule = () => {
	return (
		<Section id="schedule" headlineText="Schedule" headlineIcon={faCalendarCheck}>
				<StaticImage className="schedule-img" src="../../images/venue.jpg" alt="Roaring Camp" placeholder="blurred" />
			<FadeIn playAudio='true'>
				<Event>
					<RingsIcon aria-hidden="true" focusable="false" data-prefix="fas" data-icon="rings-wedding" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-rings-wedding fa-w-16 fa-3x"><path fill="currentColor" d="M351.25 160.77A206.38 206.38 0 0 1 379.9 233 112 112 0 1 1 224 336c0-42.21 23.69-78.57 58.31-97.49 3.37 10.64 5.69 21.75 5.69 33.49a111.34 111.34 0 0 1-30.73 76.6A79.84 79.84 0 0 0 293 403.23 175.36 175.36 0 0 0 352 272c0-81.62-55.64-150.07-131-170l35-70-32-32h-96L96 32l35 70C55.64 121.93 0 190.38 0 272a176 176 0 0 0 176 176 171.77 171.77 0 0 0 22.94-1.71A175.93 175.93 0 0 0 512 336c0-92-70.7-167.49-160.75-175.23zM64 272a112.12 112.12 0 0 1 112-112c26.85 0 51.19 9.88 70.5 25.69C194.94 216.24 160 271.68 160 336a175.89 175.89 0 0 0 6.55 47C109.28 378.16 64 330.52 64 272z"></path></RingsIcon>
					<H3>The Big Day</H3>
					<p>Friday March 11th, 2022</p>
					<Time>1:30pm - 10pm <br /> (Train Departure at 2:45pm)</Time>
					<Address>
						<H4>Roaring Camp Railroads</H4>
						<p>5401 Graham Hill Road</p>
						<p>Felton, CA 95018</p>
					</Address>
					<Buttons>
						<CalendarButton linkId="zCAqaaenwN" />
						<DirectionsButton location={'venue'}/>
						{/* https://ul.waze.com/ul?ll=37.04026884%2C-122.06027269&navigate=yes&zoom=17&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location */}
					</Buttons>
				</Event>
			</FadeIn>
			<hr />
			<FadeIn>
				<Event>
					<StyledIcon icon={faCoffee} />
					<H3>Coffee & Breakfast</H3>
					<p>Saturday March 12th, 2022</p>
					<Time>9am - 1pm <br /> (Show up when you wake up)</Time>
					<Address>
						<H4>Four Points by Sheraton</H4>
						<H5>Redwood Room</H5>
						<p>5030 Scotts Valley Drive</p>
						<p>Scotts Valley, CA, 95066</p>
					</Address>
					<Buttons>
						<CalendarButton linkId="x6Dwkqq11Y" />
						<DirectionsButton location={'sheraton'}/>
					</Buttons>
				</Event>
			</FadeIn>
		</Section>
	)
}

export default Schedule
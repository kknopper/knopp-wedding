import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDotCircle} from "@fortawesome/free-regular-svg-icons";
import { MapContainer, TileLayer, Marker, Popup, LayersControl, LayerGroup} from "react-leaflet";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { rem } from "polished";
import { StyledButton } from "./css-mixins";
import hotelInfo from '../hotels';
import airportInfo from '../airports';

const Button = styled(StyledButton)`
	padding: 10px;
	font-size: ${rem("20px")};
	text-align: center;
	margin: 10px auto 20px;
	display: flex;
	justify-content: center;

	span {
		padding-left: 10px;
		padding-right: 10px;
	}
`;

const Map = styled(MapContainer)`
	.leaflet-marker-pane img {
		&[alt="venue"] {
			filter: hue-rotate(120deg);
		}

		&[alt="airport"] {
			filter: hue-rotate(280deg);
		}
	}
`;

function VenueMap({hotel, updateHotelState}) {
	const mapRef = React.useRef();
	let venueMarkerRef;
	let markerRefs = [];

	const venue = {
		id: "venue",
		name: "Roaring Camp",
		lat: 37.040723,
		lng: -122.062440,
		zoom: 9
	};

	const mapStyle = {
		width: "100%",
		height: "450px"
	};

	const moveToMarker = (coordinates, mapRef, markerRef, zoomLvl) => {
		const [lat, lon] = coordinates;
		mapRef.flyTo([lat, lon], zoomLvl);
		console.log('open popup');
		console.log(markerRef)
		markerRef.openPopup();
	}

	const recenter = (zoom = 9) => {
		if (mapRef.current !== undefined) {
			if (hotel.id !== 'venue' || zoom !== 11 ) {
				updateHotelState({...venue, ref: venueMarkerRef, zoom});
			}
		}
	}

	React.useEffect(() => {
		if (hotel.id === undefined || mapRef.current === undefined) return;
		const { lat, lng } = hotel;
		const map = mapRef.current;
		console.log(hotel.ref)
		moveToMarker([lat, lng], map, hotel.ref, hotel.zoom);
	}, [hotel, mapRef]);

	return (
		<React.Fragment>
			{typeof window !== 'undefined' && (
				<React.Fragment>
					<Map
						style={mapStyle}
						preferCanvas={true}
						center={[venue.lat, venue.lng]}
						zoom={venue.zoom}
						scrollWheelZoom={false}
						whenCreated={ mapInstance => { mapRef.current = mapInstance } }
						tap={false}
					>
						<LayersControl position="topright">
							<LayersControl.BaseLayer checked name="Open Street Map">
								<TileLayer
								attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
								url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
								/>
							</LayersControl.BaseLayer>
							<LayersControl.Overlay checked name="  Venue 🚂">
								<Marker 
									position={[37.040723, -122.062440]}
									alt="venue"
									ref={ref => {venueMarkerRef = ref}}
								>
									<Popup onOpen={() => recenter(11)}>
										<p>Roaring Camp</p>
									</Popup>
								</Marker>
							</LayersControl.Overlay>
							<LayersControl.Overlay checked name="Airports ✈️">
								<LayerGroup>
									{airportInfo.map((airport, index) => (
										<Marker key={index} position={[airport.lat, airport.lng,]} alt="airport">
											<Popup>
												<b>{airport.name}</b>
												<br />
												Airport Code: <code>{airport.id.toUpperCase()}</code>
											</Popup>
										</Marker>
									))}
								</LayerGroup>
							</LayersControl.Overlay>
							<LayersControl.Overlay checked name=" Hotels 🏨">
								<LayerGroup>
									{hotelInfo.map((hotel, index) => (
										<Marker 
											key={index}
											position={[hotel.lat, hotel.lng,]}
											alt="hotel"
											ref={
												(ref) => {
													markerRefs[hotel.key] = ref;
													hotel.ref = ref;
												}
											}
										>
											<Popup 
												onOpen={() =>  updateHotelState(hotel)}
												// onClose={() => recenter(11)}
											>
												<AnchorLink
													to={`/#${hotel.id}`}
													title={hotel.name}
													className="stripped"
													stripHash
													onAnchorLinkClick={() => updateHotelState(hotel)}
												>
													<b>{hotel.name}</b>
													{/* <p>see info</p> */}
												</AnchorLink>
											</Popup>
										</Marker>
									))}
								</LayerGroup>
							</LayersControl.Overlay>
						</LayersControl>
					</Map>
					<Button onClick={() => recenter(9)}><FontAwesomeIcon icon={faDotCircle}></FontAwesomeIcon><span>Recenter Map</span></Button>
				</React.Fragment>
			)}
		</React.Fragment>
	);
}

export default VenueMap
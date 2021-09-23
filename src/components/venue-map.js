import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDotCircle} from "@fortawesome/free-regular-svg-icons";
import { MapContainer, TileLayer, Marker, Popup, LayersControl, LayerGroup} from "react-leaflet";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { rem } from "polished";
import { StyledButton } from "./css-mixins";
import hotelInfo from '../hotels';

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
	
	const start = {
		lat: 37.040723,
		lng: -122.062440,
		zoom: 9
	};

	const venue = {
		key: 0,
		id: "venue",
		name: "Roaring Camp",
		website: "https://www.hilton.com/en/hotels/sjcsvhf-hilton-santa-cruz-scotts-valley/",
		address: "6001 La Madrona Drive, Santa Cruz, CA, 95060",
		phone: "831-440-1000",
		coordonatelat: 37.040723,
		coordonatelng: -122.062440,
		distance: 0,
		price: "$$$"
	};

	const style = {
		width: "100%",
		height: "450px"
	};

	const startPosition = [start.lat, start.lng];

	const moveToMarker = (coordinates, mapRef, markerRef, zoomLvl) => {
		const [lat, lon] = coordinates;
		mapRef.flyTo([lat, lon], zoomLvl);
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
		const { coordonatelat, coordonatelng } = hotel;
		const map = mapRef.current;
		moveToMarker([coordonatelat, coordonatelng], map, hotel.ref, hotel.zoom);
	}, [hotel, mapRef]);

	return (
		<React.Fragment>
			{typeof window !== 'undefined' && (
				<React.Fragment>
					<Map
						style={style}
						preferCanvas={true}
						center={startPosition}
						zoom={start.zoom}
						scrollWheelZoom={false}
						whenCreated={ mapInstance => { mapRef.current = mapInstance } }
					>
						<LayersControl position="topright">
							<LayersControl.BaseLayer checked name="Open Street Map">
								<TileLayer
								attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
								url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
								/>
							</LayersControl.BaseLayer>
							<LayersControl.Overlay checked name="Venue 🚂">
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
							<LayersControl.Overlay checked name="Airport ✈️">
								<Marker position={[37.364714, -121.924238]} alt="airport">
									<Popup>
										<b>San Jose International Airport</b>
										<br />
										Airport Code: <code>SJC</code>
									</Popup>
								</Marker>
							</LayersControl.Overlay>
							<LayersControl.Overlay checked name="Hotels 🏨">
								<LayerGroup>
									{hotelInfo.map((hotel, index) => (
										<Marker 
											key={index}
											position={[hotel.coordonatelat, hotel.coordonatelng,]}
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
												>{hotel.name}</AnchorLink>
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
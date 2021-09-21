import React from "react";
// import { useHasMounted } from "../hooks/useHasMounted";
import styled from "styled-components";
import hotelInfo from '../hotels';
import { MapContainer, TileLayer, Marker, Popup, LayersControl, LayerGroup} from "react-leaflet";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import react from "react";

const Map = styled(MapContainer)`
	.leaflet-marker-pane img {
		&:first-child {
			filter: hue-rotate(120deg);
		}

		&:nth-child(2) {
			filter: hue-rotate(280deg);
		}
	}
`;

function VenueMap({hotel, hotelStateFunc}) {
	const mapRef = React.useRef();
	const venueMarkerRef = React.useRef();
	let markerRefs = [];
	
	const start = {
		lat: 37.040723,
		lng: -122.062440,
		zoom: 9
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

	const recenter = () => {
		console.log(mapRef, mapRef.current)
		if (mapRef.current != undefined) {
			moveToMarker(startPosition, mapRef.current, venueMarkerRef.current, 9);
		}
		hotelStateFunc(null);
	}

	React.useEffect(() => {
		if (!hotel || !mapRef) return;
		const { coordonatelat, coordonatelng } = hotel;
		const map = mapRef.current;

		moveToMarker([coordonatelat, coordonatelng], map, markerRefs[hotel.key], 11);
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
							<Marker position={[37.040723, -122.062440]} ref={venueMarkerRef}>
								<Popup>
									<p>Roaring Camp</p>
								</Popup>
							</Marker>
						</LayersControl.Overlay>
						<LayersControl.Overlay checked name="Airport ✈️">
							<Marker position={[37.364714, -121.924238]}>
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
									<Marker key={index} position={[hotel.coordonatelat, hotel.coordonatelng,]} 
										ref={ref => markerRefs[hotel.key] = ref}>
										<Popup>
										<AnchorLink
											to={`/#${hotel.id}`}
											title={hotel.name}
											className="stripped"
											stripHash
											onAnchorLinkClick={() => hotelStateFunc(hotel.id)}
										>{hotel.name}</AnchorLink>
										</Popup>
									</Marker>
								))}
							</LayerGroup>
						</LayersControl.Overlay>
					</LayersControl>
				</Map>
				<button onClick={() => recenter()}>Recenter Map</button>
				</React.Fragment>
			)}
		</React.Fragment>
	);

}

export default VenueMap
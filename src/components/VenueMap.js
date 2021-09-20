import React from "react";
import { MapContainer, TileLayer, Marker, Popup, Tooltip, LayersControl } from "react-leaflet";
import DirectionsButton from "./DirectionsButton";

export default class VenueMap extends React.Component {
	state = {
		lat: 37.040723,
		lng: -122.062440,
		zoom: 9
	};
	render() {
		const style = {
			width: "100%",
			height: "450px"
		};
		const position = [this.state.lat, this.state.lng];
		if (typeof window !== "undefined") {
			return (
				<MapContainer
					style={style}
					preferCanvas={true}
					center={position}
					zoom={this.state.zoom}
				>
					<LayersControl position="topright">
						<LayersControl.BaseLayer checked name="Open Street Map">
							<TileLayer
							attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
							url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
							/>
						</LayersControl.BaseLayer>
						<LayersControl.Overlay checked name="Venue 🚂">
							<Marker position={[37.040723, -122.062440]}>
								<Tooltip>
									<p>Roaring Camp</p>
								</Tooltip>
							</Marker>
						</LayersControl.Overlay>
						<LayersControl.Overlay checked name="Airport ✈️">
							<Marker position={[37.364714, -121.924238]}>
								<Popup permanent>
									<b>San Jose International Airport</b>
									<br />
									Airport Code: <code>SJC</code>
								</Popup>
							</Marker>
						</LayersControl.Overlay>
						<LayersControl.Overlay checked name="Hotels 🏨">
							<Marker position={[37.364714, -121.924238]}>
								<Popup>
									<b>San Jose International Airport</b>
								</Popup>
							</Marker>
						</LayersControl.Overlay>
					</LayersControl>
				</MapContainer>
			);
		}
		return null;
	}
}
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L, { LatLngTuple } from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  centerPosition: LatLngTuple;
  markerPosition: LatLngTuple;
  zoom: number;
  scrollWheelZoom: boolean;
  address: string;
};

const Map = ({
  centerPosition,
  zoom,
  scrollWheelZoom,
  markerPosition,
  address,
}: MapProps) => (
  <MapContainer
    center={centerPosition}
    zoom={zoom}
    scrollWheelZoom={scrollWheelZoom}
  >
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker
      position={markerPosition}
      icon={L.icon({
        iconUrl: icon,
        shadowUrl: iconShadow,
        popupAnchor: [13, 8],
      })}
    >
      <Popup>
        <a href={`http://maps.google.com/?q=${address}`}>Get Directions</a>
      </Popup>
    </Marker>
  </MapContainer>
);

export default Map;

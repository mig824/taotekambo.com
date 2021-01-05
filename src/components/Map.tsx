import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngTuple } from 'leaflet';

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
    <Marker position={markerPosition}>
      <Popup>
        <a href={`http://maps.google.com/?q=${address}`}>Open Map</a>
      </Popup>
    </Marker>
  </MapContainer>
);

export default Map;

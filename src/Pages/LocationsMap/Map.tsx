import React from "react";
import { Map, Marker } from "@vis.gl/react-google-maps";
import styled from "styled-components";
import useMobile from "../../Hooks/useMobile";

interface MapProps {
  lat: number;
  lng: number;
  zoom?: number;
}

const CustomMap: React.FC<MapProps> = ({ lat, lng, zoom }) => {
  const isMobile = useMobile();

  return (
    <MapContainer isMobile={isMobile}>
      <Map
        defaultZoom={zoom}
        defaultCenter={{ lat, lng }}
        gestureHandling={"greedy"}
        disableDefaultUI
      >
        <Marker position={{ lat, lng }} />
      </Map>
    </MapContainer>
  );
};

export default CustomMap;

const MapContainer = styled.div<{ isMobile?: boolean }>`
  height: ${({ isMobile }) => (isMobile ? "250px" : "320px")};
  width: ${({ isMobile }) => (isMobile ? "80%" : "50%")};
  display: flex;
`;

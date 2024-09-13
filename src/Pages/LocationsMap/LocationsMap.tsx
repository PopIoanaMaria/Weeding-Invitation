import CustomMap from "./Map";
import { APIProvider } from "@vis.gl/react-google-maps";
import styled from "styled-components";
import useMobile from "../../Hooks/useMobile";
import ContainerPage from "../../Components/containerPage";
import location from "./../../db.json";
import Title from "../../Components/title";
import Details from "../../Components/details";

const LocationsMap = () => {
  const isMobile = useMobile();
  const locationMap = location.locationMap;

  return (
    <ContainerPage title={"Locațiile evenimentului"}>
      <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY!}>
        {locationMap.map((location) => (
          <MapContainer key={location.id} isMobile={isMobile}>
            <Title text={location.name} />
            <Details text={location.details} />
            <CustomMap
              lat={location.lat}
              lng={location.lng}
              zoom={location.zoom}
            />
          </MapContainer>
        ))}
      </APIProvider>
    </ContainerPage>
  );
};

export default LocationsMap;

const MapContainer = styled.div<{ isMobile?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 20px 0;
`;

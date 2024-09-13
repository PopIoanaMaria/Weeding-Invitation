import ContainerPage from "../../Components/containerPage";
import program from "./../../db.json";
import styled from "styled-components";
import useMobile from "../../Hooks/useMobile";
import Title from "../../Components/title";
import Details from "../../Components/details";

const Schedule = () => {
  const schedules = program.schedule;
  const isMobile = useMobile();

  return (
    <ContainerPage title={"Programul din această zi"}>
      <ContainerDisplayDetails isMobile={isMobile}>
        {schedules.map((schedule) => (
          <ContainerDetails>
            <Image src={schedule.image} alt="img" isMobile={isMobile} />
            <Title text={schedule.locationTitle} />
            <Details text={schedule.locationStreet} />
            <Details text={schedule.time} />
          </ContainerDetails>
        ))}
      </ContainerDisplayDetails>
    </ContainerPage>
  );
};

export default Schedule;

const ContainerDisplayDetails = styled.div<{ isMobile?: boolean }>`
  display: flex;
  flex-direction: ${({ isMobile }) => (isMobile ? "column" : "row")};
  width: 100%;
  align-items: center;
`;

const ContainerDetails = styled.div`
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding: 20px 0;
`;

const Image = styled.img<{ isMobile?: boolean }>`
  width: ${({ isMobile }) => (isMobile ? "240px" : "200px")};
  height: ${({ isMobile }) => (isMobile ? "240px" : "200px")};
  object-fit: cover;
  border-radius: 50%;
  border: 6px solid ${(props) => props.theme.colors.secondary};
`;

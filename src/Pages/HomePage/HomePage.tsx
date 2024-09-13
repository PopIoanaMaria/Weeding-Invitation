import Presentation from "../Presenation/Presentation";
import CountdownTimer from "../Timer/Timer";
import styled from "styled-components";

const HomePage = () => {
  return (
    <Container>
      <Presentation />
      <CountdownTimer />
    </Container>
  );
};

export default HomePage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  min-height: 100%;
`;

import styled from "styled-components";
import useMobile from "../../Hooks/useMobile";

const FoodMenu: React.FC = () => {
  // const foodMenu = menuData.foodMenu;
  const isMobile = useMobile();

  return (
    <Container isMobile={isMobile}>
      <Title isMobile={isMobile}>Meniu de mâncare</Title>
      <Details>
        Dragi invitați, meniul de mâncare va fi încărcat cu o săptămână înaintea
        evenimentului.
      </Details>
      <Details>
        Dacă aveți alergii, intoleranțe alimentare sau preferați meniu
        vegetarian, vă rugăm să ne contactați telefonic.
      </Details>
    </Container>
  );
};

export default FoodMenu;

const Container = styled.div<{ isMobile?: boolean }>`
  display: flex;
  flex-direction: column;
  width: ${({ isMobile }) => !isMobile && "80%"};
  align-items: center;
  height: 100vh;
  margin: ${({ isMobile }) => (isMobile ? "0 auto" : "35px auto")};
  background-color: ${({ isMobile }) => !isMobile && "transparent"};
`;

const Details = styled.div`
  margin: 10px auto 20px auto;
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: center;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 400;
  font-size: 22px;
  font-style: normal;
  color: ${(props) => props.theme.colors.tertiary};
  text-align: center;
  padding: 16px 0px 0px 0px;
`;

const Title = styled.div<{ isMobile?: boolean }>`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  font-family: "Allura", cursive;
  font-weight: 700;
  font-size: ${({ isMobile }) => (isMobile ? "40px" : "46px")};
  padding: ${({ isMobile }) => (isMobile ? " 0" : "10px 0 10px 0")};
  color: ${(props) => props.theme.colors.quaternary};
`;

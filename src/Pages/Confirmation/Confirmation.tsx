import styled from "styled-components";
import useMobile from "../../Hooks/useMobile";
import ContainerPage from "../../Components/containerPage";
import confirmationContact from "./../../db.json";
import Title from "../../Components/title";
import Details from "../../Components/details";

const Confirmation = () => {
  const isMobile = useMobile();

  const contactPersons = confirmationContact.contactPersons;

  return (
    <ContainerPage title={"Confirmarea prezenței"}>
      <DisplayConfirmationContainer isMobile={isMobile}>
        {contactPersons.map((person) => (
          <ConfirmationContainer key={person.id}>
            <Title text={person.name} />
            <Details text={person.phone} />
          </ConfirmationContainer>
        ))}
      </DisplayConfirmationContainer>
    </ContainerPage>
  );
};

export default Confirmation;

const DisplayConfirmationContainer = styled.div<{ isMobile: boolean }>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({ isMobile }) => (isMobile ? "column" : "row")};
  justify-content: ${({ isMobile }) => (isMobile ? "center" : "space-between")};
  align-items: center;
  width: 100%;

  & > div {
    flex: ${({ isMobile }) => (isMobile ? "0 " : "0 0 48%")};
    margin-bottom: ${({ isMobile }) => (isMobile ? "12px" : "24px")};
  }
`;

const ConfirmationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 6px 0;
`;

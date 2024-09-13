import React from "react";
import styled, { keyframes } from "styled-components";
import borderImage from "./../../Photos/Borders/presentationBorder.png";
import useMobile from "../../Hooks/useMobile";

const Presentation = () => {
  const isMobile = useMobile();

  return (
    <AnimatedContainer isMobile={isMobile}>
      <Container isMobile={isMobile}>
        <AnimatedImage src={borderImage} alt="img" isMobile={isMobile} />
        <NameContainer>
          <FirstName isMobile={isMobile}>Andrei</FirstName>
          <And isMobile={isMobile}>&</And>
          <SecondName isMobile={isMobile}>Ioana</SecondName>
        </NameContainer>
      </Container>

      <DateContainer isMobile={isMobile}>24 mai 2025</DateContainer>
    </AnimatedContainer>
  );
};

export default Presentation;

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const sideOut = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const AnimatedContainer = styled.div<{ isMobile?: boolean }>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`;

const Container = styled.div<{ isMobile?: boolean }>`
  margin: ${({ isMobile }) =>
    isMobile ? "-25px auto 0 auto" : "25px auto 0 auto"};
  display: flex;
  justify-content: center;
`;

const AnimatedImage = styled.img<{ isMobile?: boolean }>`
  animation: ${slideIn} 3s ease-in-out;
  width: ${({ isMobile }) => (isMobile ? "350px" : "420px")};
  height: ${({ isMobile }) => (isMobile ? "370px" : "425px")};
`;

const NameContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
`;

const FirstName = styled.div<{ isMobile?: boolean }>`
  margin: ${({ isMobile }) =>
    isMobile ? "125px auto 0 auto" : "135px auto 0 auto"};
  display: flex;
  justify-content: center;
  position: absolute;
  font-family: "Allura", cursive;
  font-weight: 400;
  font-style: normal;
  font-size: ${({ isMobile }) => (isMobile ? "56px" : "60px")};
  color: ${(props) => props.theme.colors.quaternary};
  animation: ${sideOut} 3s ease-in-out;
`;

const And = styled.div<{ isMobile?: boolean }>`
  margin: ${({ isMobile }) =>
    isMobile ? "180px auto 0 auto" : "200px auto 0 auto"};
  display: flex;
  justify-content: center;
  position: absolute;
  font-family: "Allura", cursive;
  font-weight: 400;
  font-style: normal;
  font-size: ${({ isMobile }) => (isMobile ? "36px" : "40px")};
  color: ${(props) => props.theme.colors.quaternary};
  animation: ${sideOut} 3s ease-in-out;
`;

const SecondName = styled.div<{ isMobile?: boolean }>`
  margin: ${({ isMobile }) =>
    isMobile ? "205px auto 0 auto" : "230px auto 0 auto"};
  display: flex;
  justify-content: center;
  position: absolute;
  font-family: "Allura", cursive;
  font-weight: 400;
  font-style: normal;
  font-size: ${({ isMobile }) => (isMobile ? "56px" : "60px")};
  color: ${(props) => props.theme.colors.quaternary};
  animation: ${sideOut} 3s ease-in-out;
`;

const DateContainer = styled.div<{ isMobile?: boolean }>`
  display: flex;
  justify-content: center;
  font-family: "Cinzel", serif;
  font-optical-sizing: auto;
  font-weight: ${({ isMobile }) => (isMobile ? "500" : "600")};
  font-style: normal;
  font-size: ${({ isMobile }) => (isMobile ? "52px" : "64px")};
  color: ${(props) => props.theme.colors.tertiary};
  animation: ${slideIn} 3s ease-in-out;
  margin: 25px auto;
`;

import React from "react";
import styled, { keyframes, css } from "styled-components";
import Border from "./../Photos/Borders/border.png";
import useMobile from "../Hooks/useMobile";

interface MenuItem {
  id: number;
  title: string;
  details: string[];
  image?: string;
}

type ContainerMenuProps = {
  title?: string;
  menu?: MenuItem[];
  isFoodMenu?: boolean;
};

const ContainerMenu: React.FC<ContainerMenuProps> = ({
  title,
  menu,
  isFoodMenu,
}) => {
  const isMobile = useMobile();

  return (
    <Container isMobile={isMobile}>
      <Title isMobile={isMobile}>{title}</Title>
      {menu &&
        menu.map((section, index) => (
          <ContainerDetails key={index} isFoodMenu={isFoodMenu}>
            <Titles>{section.title}</Titles>

            {section.details.map((detail, detailIndex) => (
              <Details key={detailIndex}>{detail}</Details>
            ))}
            {section.image ? (
              section.id % 2 === 0 ? (
                <LeftImage src={section.image} isMobile={isMobile} />
              ) : (
                <RightImage src={section.image} isMobile={isMobile} />
              )
            ) : null}
          </ContainerDetails>
        ))}
    </Container>
  );
};

export default ContainerMenu;

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

const slideOut = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const Container = styled.div<{ isMobile?: boolean }>`
  display: flex;
  flex-direction: column;
  width: ${({ isMobile }) => (isMobile ? "100%" : "80%")};
  align-items: center;
  height: 100%;
  margin: ${({ isMobile }) => (isMobile ? "0 auto" : "35px auto")};
  background-color: ${({ isMobile }) => !isMobile && "transparent"};
  padding: ${({ isMobile }) => !isMobile && "36px 0"};
  border: ${({ isMobile }) => !isMobile && "26px solid transparent"};
  border-image: url(${Border}) 45 round;
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
  padding: 0 0 10px 0;
  color: ${(props) => props.theme.colors.quaternary};
`;

const commonAnimatedRightImage = css<{ isMobile?: boolean }>`
  position: absolute;
  animation: ${slideOut} 1.5s ease-in-out;
`;

const commonAnimatedLeftImage = css<{ isMobile?: boolean }>`
  position: absolute;
  animation: ${slideIn} 3s ease-in-out;
`;

const RightImage = styled.img<{ isMobile?: boolean }>`
  ${commonAnimatedRightImage};

  width: ${({ isMobile }) => (isMobile ? "20vw" : "8vw")};
  height: ${({ isMobile }) => (isMobile ? "10vh" : "20vh")};

  right: ${({ isMobile }) => (isMobile ? "4vw" : "14vw")};
  top: ${({ isMobile }) => (isMobile ? "6vh" : "6vh")};
`;

const LeftImage = styled.img<{ isMobile?: boolean }>`
  ${commonAnimatedLeftImage};

  width: ${({ isMobile }) => (isMobile ? "11vw" : "5vw")};
  height: ${({ isMobile }) => (isMobile ? "13vh" : "28vh")};

  left: ${({ isMobile }) => (isMobile ? "12vw" : "18vw")};
  top: ${({ isMobile }) => (isMobile ? "20vh" : "14vh")};
`;

const ContainerDetails = styled.div<{ isFoodMenu?: boolean }>`
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  width: ${({ isFoodMenu }) => (isFoodMenu ? "80%" : "100%")};
  align-items: center;
  padding: 20px 0;
  position: relative;
  text-align: center;
`;

const Titles = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  font-family: "Cinzel", serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
  font-size: 28px;
  padding: 10px 0 5px 0;
  color: ${(props) => props.theme.colors.quaternary};
`;

const Details = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 400;
  font-size: 22px;
  font-style: normal;
  color: ${(props) => props.theme.colors.tertiary};
`;

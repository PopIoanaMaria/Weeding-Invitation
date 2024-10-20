import React from "react";
import styled from "styled-components";
import Border from "./../Photos/Borders/border.png";
import useMobile from "../Hooks/useMobile";
import BorderTop from "./../Photos/Borders/borderTop.png";

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
  children?: React.ReactNode;
};

const ContainerMenu: React.FC<ContainerMenuProps> = ({
  title,
  menu,
  isFoodMenu,
  children,
}) => {
  const isMobile = useMobile();

  return (
    <OuterContainer isMobile={isMobile}>
      <InnerContainer isMobile={isMobile}>
        <Title isMobile={isMobile}>{title}</Title>
        {menu &&
          menu.map((section, index) => (
            <ContainerDetails key={index} isFoodMenu={isFoodMenu}>
              <Titles>{section.title}</Titles>

              {section.details.map((detail, detailIndex) => (
                <Details key={detailIndex}>{detail}</Details>
              ))}
            </ContainerDetails>
          ))}
        {children}
      </InnerContainer>
    </OuterContainer>
  );
};

export default ContainerMenu;

const OuterContainer = styled.div<{ isMobile?: boolean; isFoodMenu?: boolean }>`
  display: flex;
  flex-direction: column;
  width: ${({ isMobile }) => !isMobile && "50%"};
  align-items: center;
  height: 100%;
  margin: ${({ isMobile }) => (isMobile ? "0" : "35px auto")};
  background-color: ${({ isMobile }) => !isMobile && "transparent"};

  border-left: 26px solid transparent;
  border-right: 26px solid transparent;
  border-image: url(${Border}) 45 round;
`;

const InnerContainer = styled.div<{ isMobile?: boolean }>`
  width: 100%;
  padding: ${({ isMobile }) => !isMobile && "36px 0"};
  height: 100%;

  border-top: 28px solid transparent;
  border-bottom: 28px solid transparent;
  border-image: url(${BorderTop}) 45 round;
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
  padding: ${({ isMobile }) => (isMobile ? "25px 0 0px 0" : "10px 0 10px 0")};
  color: ${(props) => props.theme.colors.quaternary};
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

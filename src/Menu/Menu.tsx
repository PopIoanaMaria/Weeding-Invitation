import React, { useState } from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import useMobile from "../Hooks/useMobile";
import menuPages from "./../db.json";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMobile();

  const pages = menuPages.pages;

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isMobile ? (
        <MobileContainer>
          <GiHamburgerMenu onClick={toggleSidebar} size="22px" />
          <SidebarContainer isOpen={isOpen}>
            <CloseButton onClick={toggleSidebar}>&times;</CloseButton>
            {pages.map((page) => (
              <SidebarItem href={page.path}>{page.name}</SidebarItem>
            ))}
          </SidebarContainer>
        </MobileContainer>
      ) : (
        <WebContainer>
          {pages.map((page) => (
            <WebMenuItem href={page.path}>{page.name}</WebMenuItem>
          ))}
        </WebContainer>
      )}
    </>
  );
};

export default Menu;

const MobileContainer = styled.div`
  color: ${(props) => props.theme.colors.tertiary};
  font-size: 1em;
  padding: 16px;
  cursor: pointer;
  z-index: 100;
`;

const SidebarContainer = styled.div<{ isOpen: boolean }>`
  height: 100%;
  width: ${(props) => (props.isOpen ? "250px" : "0")};
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${(props) => props.theme.colors.tertiary};
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  z-index: 100;
`;

const SidebarItem = styled.a`
  padding: 12px 26px;
  text-decoration: none;
  font-size: 22px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.primary};
  display: block;
  transition: 0.3s;
  font-family: "Kaushan Script", cursive;
  font-weight: 400;
  font-style: normal;
`;

const CloseButton = styled.a`
  position: absolute;
  top: 20px;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
`;

const WebContainer = styled.div`
  color: ${(props) => props.theme.colors.primary};
  padding: 16px 0px;
  z-index: 100;
  background-color: ${(props) => props.theme.colors.tertiary};
  font-size: 18px;
  width: 100%;
  align-items: center;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
`;

const WebMenuItem = styled.a`
  color: ${(props) => props.theme.colors.primary};
  font-size: 1em;
  margin: 0 16px;
  cursor: pointer;
  z-index: 100;
  text-decoration: none;
  font-family: "Kaushan Script", cursive;
  font-weight: 400;
  &:hover {
    color: ${(props) => props.theme.colors.secondary};
  }
`;

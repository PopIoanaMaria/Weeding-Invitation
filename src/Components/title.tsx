import React from "react";
import useMobile from "../Hooks/useMobile";
import styled from "styled-components";

type TitleProps = {
  text: string;
};

const Title: React.FC<TitleProps> = ({ text }) => {
  const isMobile = useMobile();

  return <Text isMobile={isMobile}>{text}</Text>;
};

export default Title;

const Text = styled.div<{ isMobile?: boolean }>`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  font-family: "Cinzel", serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
  font-size: ${({ isMobile }) => (isMobile ? "28px" : "30px")};
  padding: 10px 0 5px 0;
  color: ${(props) => props.theme.colors.quaternary};
`;

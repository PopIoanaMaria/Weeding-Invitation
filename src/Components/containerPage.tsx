import React from "react";
import styled from "styled-components";
import useMobile from "./../Hooks/useMobile";

interface ContainerPageProps {
  children?: React.ReactNode;
  title?: string;
}

const ContainerPage: React.FC<ContainerPageProps> = ({ children, title }) => {
  const isMobile = useMobile();

  return (
    <Container isMobile={isMobile}>
      <Title isMobile={isMobile}>{title}</Title>
      {children}
    </Container>
  );
};

export default ContainerPage;

const Container = styled.div<{ isMobile?: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  min-height: 100vh;
  height: 100%;
  margin: ${({ isMobile }) => (isMobile ? "0 auto" : "25px auto")};
`;

const Title = styled.div<{ isMobile?: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  font-family: "Allura", cursive;
  font-weight: 700;
  font-size: ${({ isMobile }) => (isMobile ? "36px" : "46px")};
  padding: 0 0 10px 0;
  color: ${(props) => props.theme.colors.quaternary};
`;

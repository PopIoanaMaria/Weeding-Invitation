import React from "react";
import styled from "styled-components";

type DetailsProps = {
  text: string;
};

const Details: React.FC<DetailsProps> = ({ text }) => {
  return <Text>{text}</Text>;
};

export default Details;

const Text = styled.div`
  margin: 5px auto 10px auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 400;
  font-size: 25px;
  font-style: normal;
  color: ${(props) => props.theme.colors.tertiary};
`;

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import useWeb from "../../Hooks/useWeb";
import useMobile from "../../Hooks/useMobile";
import images from "./../../db.json";
import { calculateTimeLeft } from "../../Functions/timer";

interface ImageType {
  id: number;
  image: string;
  title?: string;
  description?: string;
}

const getRandomImages = (imagesArray: ImageType[], num: number) => {
  const shuffled = [...imagesArray].sort(() => 0.5 - Math.random());
  const uniqueImages = Array.from(
    new Set(shuffled.map((image) => image.image))
  );

  return uniqueImages.slice(0, num);
};

const CountdownTimer: React.FC = () => {
  const isWeb = useWeb();
  const isMobile = useMobile();

  const coverImages = images.coverImage;

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [randomImages, setRandomImages] = useState(
    getRandomImages(coverImages, 3)
  );
  const [randomImagesMobile, setRandomImagesMobile] = useState(
    getRandomImages(coverImages, 3)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    const imageChangeInterval = setInterval(() => {
      setRandomImages(getRandomImages(coverImages, 3));
      setRandomImagesMobile(getRandomImages(coverImages, 1));
    }, 5000);

    return () => {
      clearInterval(timer);
      clearInterval(imageChangeInterval);
    };
  }, [coverImages]);

  return (
    <>
      <TimerContainer isMobile={isMobile}>
        <Time isMobile={isMobile}>
          <div>{timeLeft.days}</div>
          <Details>Zile</Details>
        </Time>
        <Time isMobile={isMobile}>
          <div>{timeLeft.hours} </div>
          <Details>Ore</Details>
        </Time>
        <Time isMobile={isMobile}>
          <div>{timeLeft.minutes}</div>
          <Details>Minute</Details>
        </Time>
        {isWeb && (
          <Time>
            <div>{timeLeft.seconds}</div>
            <Details>Secunde</Details>
          </Time>
        )}
      </TimerContainer>
      <Container>
        {isMobile && (
          <Image src={randomImagesMobile[0]} alt="img" isMobile={isMobile} />
        )}

        {isWeb && (
          <ImagesContainer>
            {randomImages.map((image, index) => (
              <Image src={image} alt={`img-${index}`} key={index} />
            ))}
          </ImagesContainer>
        )}
      </Container>
    </>
  );
};

export default CountdownTimer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Time = styled.div<{ isMobile?: boolean }>`
  font-family: "Cinzel", serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
  font-size: ${({ isMobile }) => (isMobile ? "36px" : "40px")};
  display: flex;
  flex-direction: column;
  padding: ${({ isMobile }) => (isMobile ? "0 20px" : " 0 32px")};
  text-align: center;
`;

const TimerContainer = styled.div<{ isMobile?: boolean }>`
  display: flex;
  margin: ${({ isMobile }) =>
    isMobile ? "0px auto 25px auto" : "0px auto 30px auto"};
  justify-content: center;
  color: ${(props) => props.theme.colors.quaternary};
`;

const Details = styled.div`
  color: ${(props) => props.theme.colors.quaternary};
  font-family: "Allura", cursive;
  font-weight: 600;
  font-style: normal;
  font-size: 20px;
`;

const Image = styled.img<{ isMobile?: boolean }>`
  height: ${({ isMobile }) => (isMobile ? "400px" : "550px")};
  object-fit: cover;
  opacity: ${({ isMobile }) => (isMobile ? "0.8" : "0.65")};
  width: ${({ isMobile }) => (isMobile ? "100%" : "calc(100% / 3)")};
`;

const ImagesContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

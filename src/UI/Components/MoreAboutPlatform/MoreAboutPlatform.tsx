import { tablet } from "Constants/Devices";
import { useStore } from "Core/store";
import React, { useState } from "react";
import styled from "styled-components";
import { Scroll } from "UI/UI-Kit/Scroll/Scroll";
import { Flex } from "UI/UI-Kit/Styled/Flex";
import { Typography } from "UI/UI-Kit/Styled/Typography";
import { Wrapper } from "UI/UI-Kit/Styled/Wrapper";
import { PARAGRAPHS } from "./MoreAboutPlatform.constatns";
import { Absolute } from "../../UI-Kit/Styled/Absolute";

const TV = styled.div`
  width: 722px;
  height: 419px;
  background: #0d0717;
  border: 16px solid #adbcff;
  box-shadow: inset 0px 0px 68px rgba(255, 255, 255, 0.05), inset 0px 2px 4px rgba(255, 255, 255, 0.24);
  backdrop-filter: blur(24px);
  border-radius: 60px;
  background-image: url("/assets/images/tvBack2.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (max-width: ${tablet}px) {
    width: 100%;
    height: 260px;
  }
`;

export const MoreAboutPlatform = () => {
  const [active, setActive] = useState<number>(0);
  const {
    store: {
      Device: { isDesktop, isMobile },
    },
  } = useStore((store) => ({
    Device: store.Device,
  }));
  return (
    <Wrapper margin="0 0 150px 0" position="relative" id={"product"} zIndex="1">
      <Absolute
        isActive={true}
        bgImage={"learnBallSmall"}
        zIndex={-1}
        height="55px"
        width="55px"
        top="8rem"
        left="11rem"
      />
      <Absolute
        isActive={true}
        bgImage={"learnBallBig"}
        zIndex={-1}
        height="252px"
        width="256px"
        margin="auto"
        bottom="0"
        right="0"
        left="60rem"
      />
      <Absolute
        isActive={true}
        bgImage={"learnEllipseBg"}
        zIndex={-1}
        height="821px"
        width="900px"
        top={isMobile ? "-10rem" : "-4rem"}
        left={isMobile ? "-8rem" : "0"}
        right="0"
        margin="0 auto"
      />
      <Flex justify="center" direction="column" align="center" gap={32} margin={"0 0 72px 0"}>
        <Typography weight={600} size={48} lHeight={70} tAlign={"center"}>
          Learn more about our platform
        </Typography>
        <Typography weight={600} size={20} lHeight={30} tAlign={"center"}>
          Our team has prepared videos for you to help you learn more <br /> about the platform and its functionality
        </Typography>
      </Flex>
      <Flex justify="center" align="center" direction={isDesktop ? "row" : "column"} gap={71}>
        <Flex gap={36}>
          <Flex direction="column" gap={43} justify="center">
            {PARAGRAPHS.map((el, idx) => (
              <Typography
                weight={700}
                size={24}
                lHeight={31}
                onClick={() => setActive(idx)}
                key={idx}
                cursor={"pointer"}
                color={active === idx ? "var(--blue)" : "var(--white)"}
              >
                {el.title}
              </Typography>
            ))}
          </Flex>
          <Scroll active={active} sHeight={180} max={3} sColor={"var(--blue)"} />
        </Flex>
        <TV />
      </Flex>
    </Wrapper>
  );
};

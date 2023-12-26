import { smallMobile, tablet } from "Constants/Devices";
import { useStore } from "Core/store";
import React, { FC, useState } from "react";
import styled from "styled-components";
import { Scroll } from "UI/UI-Kit/Scroll/Scroll";
import { Flex } from "UI/UI-Kit/Styled/Flex";
import { Typography } from "UI/UI-Kit/Styled/Typography";
import { Wrapper } from "UI/UI-Kit/Styled/Wrapper";
import { QUESTIONS } from "./QuestionsAboutUs.constants";
import { Absolute } from "../../UI-Kit/Styled/Absolute";

const AnswersContainer = styled.div`
  max-width: 751px;
  height: 408px;
  padding: 50px 80px;
  display: flex;
  flex-direction: column;
  gap: 41px;
  background: linear-gradient(0deg, rgba(12, 7, 21, 0.5), rgba(12, 7, 21, 0.5)), rgba(255, 255, 255, 0.04);
  box-shadow: inset 0px 0px 68px rgba(255, 255, 255, 0.05), inset 0px 2px 4px rgba(255, 255, 255, 0.24);
  backdrop-filter: blur(24px);
  border-radius: 60px;
  overflow: hidden;
  display: flex;
  justify-content: center;

  @media screen and (max-width: ${tablet}px) {
    padding: 26px 64px;
    gap: 24px;
  }

  @media screen and (max-width: ${smallMobile}px) {
    padding: 26px 19px;
    gap: 13px;
  }
`;

interface QuestionAboutUsProps {
  withoutTitle?: boolean;
}

export const QuestionAboutUs: FC<QuestionAboutUsProps> = ({ withoutTitle = false }) => {
  const [active, setActive] = useState<number>(0);
  const {
    store: {
      Device: { isDesktop, isMobile },
    },
  } = useStore((store) => ({
    Device: store.Device,
  }));

  return (
    <Wrapper id="company" position="relative" zIndex={"1"}>
      {!withoutTitle && (
        <Typography weight={600} size={48} lHeight={70} tAlign="center">
          Learn more about us
        </Typography>
      )}
      <Absolute
        isActive={true}
        bgImage={"ball"}
        zIndex={-1}
        top={isMobile ? "7rem" : "-7rem"}
        right={"70rem"}
        left={"0"}
        margin={"auto"}
        width="247px"
        height="242px"
      />
      <Absolute
        isActive={true}
        bgImage={"reliableEllipseContainer"}
        zIndex={-1}
        height="400px"
        width="700px"
        top="2rem"
        left="-20rem"
        right={"0rem"}
        margin={"0 auto"}
        opacity={"0.2"}
        background={"#C7ADFF"}
        mixBlendMode={"saturation"}
        filter={"blur(250px)"}
        transform={"rotate(32.48deg)"}
      />
      {!isMobile && (
        <Absolute
          isActive={true}
          bgImage={"ballSmall"}
          zIndex={-1}
          height="150px"
          width="150px"
          bottom="1rem"
          right="33rem"
        />
      )}
      <Absolute
        isActive={true}
        bgImage={"numerousBackground"}
        zIndex={-1}
        height="600px"
        width="618px"
        bottom="-3rem"
        right="29rem"
      />
      <Absolute
        isActive={true}
        bgImage={"numerousBall"}
        zIndex={-1}
        height="600px"
        width="618px"
        bottom="-3rem"
        left="10rem"
      />
      <Absolute
        isActive={true}
        bgImage={"smallestBall"}
        zIndex={-1}
        height="50px"
        width="50px"
        top={"-5rem"}
        left={"23rem"}
        right={"0"}
        margin={"0 auto"}
      />
      <Flex
        direction={isDesktop ? "row" : "column-reverse"}
        align="center"
        justify="center"
        margin="64px 0 150px 0"
        gap={isDesktop ? 72 : 55}
      >
        <AnswersContainer>
          {QUESTIONS[active].text.map((el, idx) => (
            <Typography key={idx} family="Inter" weight={500} size={isDesktop ? 20 : 16} lHeight={isDesktop ? 28 : 23}>
              {el}
            </Typography>
          ))}
        </AnswersContainer>
        <Flex direction="row" gap={72} align="center">
          <Scroll max={3} active={active} sHeight={180} />
          <Flex direction="column" gap={28}>
            {QUESTIONS.map((el, idx) => (
              <Typography
                key={idx}
                weight={700}
                size={24}
                lHeight={31}
                cursor={"pointer"}
                onClick={() => setActive(idx)}
                color={active === idx ? "var(--purple-dark)" : "var(--white)"}
              >
                {el.title}
              </Typography>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Wrapper>
  );
};

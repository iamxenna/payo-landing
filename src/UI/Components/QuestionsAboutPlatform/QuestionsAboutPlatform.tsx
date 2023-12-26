import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { Button } from "UI/UI-Kit/Button/Button";
import { Scroll } from "UI/UI-Kit/Scroll/Scroll";
import { Flex } from "UI/UI-Kit/Styled/Flex";
import { Typography } from "UI/UI-Kit/Styled/Typography";
import { Wrapper } from "UI/UI-Kit/Styled/Wrapper";
import { Container as BlockContainer } from "UI/UI-Kit/Styled/Container";
import { QUESTIONS } from "./QuestionsAboutPlatform.constants";
import { useStore } from "Core/store";
import { tablet } from "Constants/Devices";

const Container = styled.div`
  max-width: 540.5px;
  height: 255px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 73px;
  background: linear-gradient(0deg, rgba(18, 20, 33, 0.4), rgba(18, 20, 33, 0.4)), rgba(255, 255, 255, 0.04);
  box-shadow: inset 0px 0px 68px rgba(255, 255, 255, 0.05), inset 0px 2px 4px rgba(255, 255, 255, 0.24);
  backdrop-filter: blur(24px);
  border-radius: 50px;

  @media screen and (max-width: ${tablet}px) {
    margin-bottom: 28px;
  }
`;

export const QuestionsAboutPlatform = () => {
  const {
    store: {
      Device: { isDesktop, isMobile },
    },
  } = useStore((store) => ({
    Device: store.Device,
  }));
  const [active, setActive] = useState<number>(0);

  const INFO = useMemo(() => {
    return (
      <Flex gap={33} align="center" justify="center">
        <Typography family="Inter" weight={500} lHeight={24}>
          More information is available <br /> in our knowledge base
        </Typography>
        <Button
          onClick={() =>
            window.open("https://murphywl.notion.site/Reference-FAQ-a6a0daf09a434451821bc7fa2b71cbeb", "_blank")
          }
          variant={"border"}
          width={"280px"}
        >
          Learn more
        </Button>
      </Flex>
    );
  }, []);

  return (
    <Wrapper margin="0 0 150px 0">
      <Flex direction="row" width={100} gap={139} justify="center" align="center" margin="0 0 31px 0">
        <Typography weight={700} size={48} tAlign={!isDesktop && "center"} lHeight={65}>
          Questions about <br /> the platform
        </Typography>
        {isDesktop && INFO}
      </Flex>
      <Flex gap={isDesktop ? 72 : 60} justify="center" direction={isDesktop ? "row" : "column"} align="center">
        <Flex gap={75} width={!isDesktop && 80}>
          <BlockContainer width={isDesktop ? "383px" : "95%"} height={!isMobile ? "240px" : "100%"}>
            <Flex
              direction="column"
              gap={isDesktop ? 37 : 16}
              justify={isDesktop ? "center" : "space-between"}
              height={100}
            >
              {QUESTIONS.map((el, idx) => (
                <Typography
                  onClick={() => setActive(idx)}
                  weight={600}
                  lHeight={21}
                  color={active === idx ? "var(--purple-dark)" : "var(--white)"}
                  cursor="pointer"
                >
                  {el.title}
                </Typography>
              ))}
            </Flex>
          </BlockContainer>
          <Scroll active={active} max={3} sHeight={240} />
        </Flex>
        <Container>
          <Typography lHeight={21} family="Inter">
            {QUESTIONS[active].text}
          </Typography>
        </Container>
      </Flex>
      {!isDesktop && INFO}
    </Wrapper>
  );
};

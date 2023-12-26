import React, { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import { TypeAnimation } from "react-type-animation";
import { Flex } from "UI/UI-Kit/Styled/Flex";
import { Typography } from "UI/UI-Kit/Styled/Typography";
import { Wrapper } from "UI/UI-Kit/Styled/Wrapper";
import { Button } from "UI/UI-Kit/Button/Button";
import { Grid } from "UI/UI-Kit/Styled/Grid";
import { TransparentTextContainer } from "UI/UI-Kit/TransparentTextContainer/TransparentTextContainer";
import { Container } from "UI/UI-Kit/Styled/Container";
import { TEXTS, ITEMS_ONE, ITEMS_TWO } from "./WelcomeProduct.constants";
import { tablet } from "Constants/Devices";
import { useStore } from "Core/store";
import { UsersChatMessages } from "UI/UI-Kit/UsersChatMessages/UsersChatMessages";
import { Absolute } from "../../UI-Kit/Styled/Absolute";

const RotateImage = styled.div`
  position: absolute;
  right: 17.42%;
  top: 1.47%;

  @media screen and (max-width: ${tablet}px) {
    left: 0;
    right: 0;
    margin: 24rem auto;
    display: flex;
    justify-content: center;
    padding: 0 3rem;
  }
`;

const SpiralContainer = styled.div`
  position: absolute;
  top: -2rem;
  right: 1.3rem;
`;

const SmallBall = styled.div`
  position: absolute;
  z-index: -1;
  opacity: 1;
  left: 0;
  right: 2rem;
  bottom: 12rem;
  margin: auto;
  top: 0;
  width: 68px;
  height: 68px;
`;

export const WelcomeProduct = () => {
  const [reverted, setReverted] = useState<number[]>([]);
  const [selectedMessageItems, setSelectedMessageItems] = useState<number>(0);
  const {
    store: {
      Device: { isDesktop, isMobile },
    },
  } = useStore((store) => ({
    Device: store.Device,
  }));

  const phoneImage = useMemo(() => {
    if (!isDesktop) {
      return "PHONE";
    }
    return "PHONE_ROTATE";
  }, [isDesktop]);

  useEffect(() => {
    function changeMessages() {
      let i = 0;
      setTimeout(() => {
        setSelectedMessageItems((prev) => (prev === 1 ? (prev -= 1) : (prev += 1)));
        if (i === 100) {
          return;
        }
        i++;
        changeMessages();
      }, 5000);
    }
    changeMessages();
  }, []);

  const preparedTexts = useMemo(() => {
    if (isMobile) {
      return TEXTS.slice(0, 4);
    }
    return TEXTS;
  }, [isMobile]);

  const containerClickHandler = useCallback((idx: number) => {
    if (idx in reverted) {
      setReverted([...reverted].splice(idx, 1));
    } else {
      setReverted([...reverted, idx]);
    }
  }, []);
  return (
    <Wrapper position="relative" width="100%" margin="72px 0 0 0" id="benefits" zIndex={"1"}>
      <SmallBall>
        <Image src={"/assets/images/hovers/paymentSmallBall.svg"} width={"68px"} height={"68px"} />
      </SmallBall>
      <Absolute
        bgImage={"paymentBallFees"}
        isActive={true}
        width={"280px"}
        height={"280px"}
        zIndex={-1}
        opacity={"1"}
        left={"0"}
        right={"29.5rem"}
        bottom={"0rem"}
        top={isMobile ? "-4rem" : "13rem"}
        margin={"auto"}
      />
      <Absolute
        bgImage={"paymentBiggestBall"}
        isActive={true}
        width={"420px"}
        height={"425px"}
        zIndex={-1}
        opacity={"1"}
        right={isMobile ? "-4rem" : "12rem"}
        top={"0"}
        bottom={isMobile ? "18rem" : "16rem"}
        margin={"auto 0"}
      />
      <Absolute
        bgImage={"paymentEllipseCenter"}
        isActive={true}
        width={"520px"}
        height={"900px"}
        zIndex={-1}
        opacity={"1"}
        right={"2rem"}
        left={"0"}
        top={"2rem"}
        bottom={"0"}
        margin={"0 auto"}
        transform={"rotate(-26.04deg)"}
        filter={"blur(200px)"}
        background={"rgba(66, 8, 139, 0.6)"}
      />
      <Absolute
        bgImage={"paymentMobileEllipseLeft"}
        isActive={true}
        width={"400px"}
        height={"1000px"}
        zIndex={-1}
        opacity={"0.1"}
        background={"rgba(127, 51, 129, 0.6)"}
        filter={"blur(125px)"}
        right={"0"}
        left={"20rem"}
        margin={"0 auto"}
        top={"-7rem"}
        transform={"rotate(20.14deg)"}
      />
      <Absolute
        bgImage={"paymentMobileEllipseRight"}
        isActive={true}
        width={"500px"}
        height={"800px"}
        zIndex={-1}
        opacity={"0.5"}
        background={"#572775"}
        filter={"blur(125px)"}
        right={"13rem"}
        top={"6rem"}
        transform={"matrix(-0.92, -0.4, -0.4, 0.92, 0, 0)"}
      />
      <div>
        <Flex
          direction="column"
          gap={63}
          align={!isDesktop ? "center" : undefined}
          margin={!isDesktop ? "0 0 35rem 0" : ""}
          position={"relative"}
        >
          <UsersChatMessages
            items={{
              name: ITEMS_ONE.names[selectedMessageItems],
              text: ITEMS_ONE.texts[selectedMessageItems],
              avatar: ITEMS_ONE.avatars[selectedMessageItems],
            }}
            bottom={isDesktop ? "15rem" : "-17rem"}
            right={isDesktop && "27rem"}
            left={!isDesktop && "4%"}
            margin={"auto"}
            width="264px"
            height="137px"
            tooltipPosition="right"
          />
          <UsersChatMessages
            items={{
              name: ITEMS_TWO.names[selectedMessageItems],
              text: ITEMS_TWO.texts[selectedMessageItems],
              avatar: ITEMS_TWO.avatars[selectedMessageItems],
            }}
            bottom={isDesktop ? "0" : "-32rem"}
            right={isDesktop ? "2rem" : "-1%"}
            margin={"0 auto"}
            width="320px"
            height="156px"
            tooltipPosition="left"
          />
          <Flex
            direction="column"
            margin="-100px 0 0 0"
            width={isDesktop ? 50 : 100}
            align={!isDesktop ? "center" : undefined}
            gap={25}
          >
            <Typography
              tAlign={!isDesktop ? "center" : ""}
              weight={isDesktop ? 400 : 800}
              size={isDesktop ? 60 : 30}
              lHeight={isDesktop ? 91 : 52}
            >
              We create payment product for
            </Typography>
            <TypeAnimation
              sequence={["freelancers", 2000, "bloggers", 2000, "entrepreneurs", 2000]}
              wrapper="h1"
              cursor={false}
              repeat={Infinity}
              className={"typer"}
            />
          </Flex>
          <Container position="relative" margin="-2rem 0 0 0">
            <Flex gap={isDesktop ? 86 : 33} align={"center"}>
              <Button
                onClick={() => window.open("https://app.payo.one", "_blank")}
                width={isMobile && "227px"}
                variant={"primary"}
              >
                Try for free
              </Button>
              <Typography>
                1% commission, <br />
                instant transactions
              </Typography>
              <SpiralContainer>
                <Image
                  src={"/assets/images/spiral.svg"}
                  width="207px"
                  height="69px"
                  quality={100}
                  alt={"payo-spiral"}
                />
              </SpiralContainer>
            </Flex>
          </Container>
        </Flex>
        <Container margin="116px 0 0 0">
          <RotateImage>
            <Image
              src={`/assets/images/${phoneImage}.svg`}
              width={480}
              objectFit={"contain"}
              height={898}
              quality={100}
              alt={"payo-phone"}
            />
          </RotateImage>
        </Container>
        <Grid column={"1fr 1fr 1fr"} gap={16} justify={"center"} id="benefits">
          {preparedTexts.map((el, idx) => (
            <TransparentTextContainer
              key={idx}
              texts={el}
              isReverted={reverted.includes(idx)}
              clickHandler={() => containerClickHandler(idx)}
            />
          ))}
        </Grid>
      </div>
    </Wrapper>
  );
};

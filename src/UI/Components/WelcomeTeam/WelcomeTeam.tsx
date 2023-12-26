import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import { Flex } from "UI/UI-Kit/Styled/Flex";
import { Typography } from "UI/UI-Kit/Styled/Typography";
import { Wrapper } from "UI/UI-Kit/Styled/Wrapper";
import { PurpleText } from "UI/UI-Kit/Styled/PurpleText";
import { useStore } from "Core/store";
import { tablet } from "Constants/Devices";
import { Container } from "UI/UI-Kit/Styled/Container";
import { UsersChatMessages } from "UI/UI-Kit/UsersChatMessages/UsersChatMessages";
import { TEXT_ONE, TEXT_TWO } from "./WelcomeTeam.constants";
import { Absolute } from "../../UI-Kit/Styled/Absolute";

const RotateImage = styled.div`
  position: absolute;
  right: 5%;
  top: 1.47%;

  @media screen and (max-width: ${tablet}px) {
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 14rem;
    display: flex;
    justify-content: center;
  }
`;

export const WelcomeTeam = () => {
  const [selectedMessageItems, setSelectedMessageItems] = useState<number>(0);
  const {
    store: {
      Device: { isDesktop, isMobile },
    },
  } = useStore((store) => ({
    Device: store.Device,
  }));

  useEffect(() => {
    function changeMessages() {
      let i = 0;
      setTimeout(() => {
        setSelectedMessageItems((prev) => (prev === 2 ? (prev -= 2) : (prev += 1)));
        if (i === 100) {
          return;
        }
        i++;
        changeMessages();
      }, 5000);
    }
    changeMessages();
  }, []);

  const text = useMemo(() => {
    if (isDesktop) {
      return (
        <Flex direction="column" gap={28}>
          <Typography weight={500} tAlign={!isDesktop && "center"} lHeight={24}>
            PAYO is a decentralized fintech system that allows everyone to receive cryptocurrency for products or
            donations via payment links.
          </Typography>
          <Typography weight={500} tAlign={!isDesktop && "center"} lHeight={24}>
            Getting all the benefits that can't use traditional payment methods alone!
          </Typography>
        </Flex>
      );
    }
    return (
      <Typography weight={500} tAlign={"center"} lHeight={24}>
        PAYO is a decentralized fintech system that allows everyone to receive cryptocurrency for products or donations
        via payment links. Getting all the benefits that can't use traditional payment methods alone!
      </Typography>
    );
  }, [isDesktop]);

  const blocksImg = useMemo(() => {
    if (isDesktop) {
      return (
        <Image
          src={"/assets/images/teamWelcome.png"}
          width={595}
          height={447}
          quality={100}
          alt={"payo-team-welcome"}
        />
      );
    }
    return (
      <Image
        src={"/assets/images/teamWelcomeResp.png"}
        width={415}
        height={492}
        quality={100}
        alt={"payo-team-welcome-resp"}
      />
    );
  }, [isDesktop]);
  return (
    <Wrapper position="relative" width="100%" margin="72px 0 9rem 0" zIndex={"1"}>
      <Absolute
        isActive={true}
        bgImage={"reliableEllipseLeft"}
        zIndex={1}
        opacity={"1"}
        height="570px"
        width="600px"
        bottom={isMobile ? "-10rem" : "-12rem"}
        right={isMobile ? "3rem" : "22rem"}
      />
      {!isMobile && (
        <Absolute
          isActive={true}
          bgImage={"reliableEllipseContainer"}
          zIndex={1}
          height="400px"
          width="1000px"
          top={"2rem"}
          right={"2rem"}
          opacity={"0.1"}
          background={"rgba(127, 51, 129, 0.6)"}
          filter={"blur(125px)"}
          transform={"rotate(-66.14deg)"}
        />
      )}
      <Absolute
        isActive={true}
        bgImage={"reliableEllipseRight"}
        zIndex={isMobile ? 0 : 1}
        opacity={isMobile ? "0.7" : "1"}
        height="545px"
        width="600px"
        bottom={isMobile ? "-16rem" : "-7rem"}
        right={isMobile ? "-7rem" : "5rem"}
      />
      <Container width={"100%"} position="relative">
        <UsersChatMessages
          items={{
            name: TEXT_ONE.names[selectedMessageItems],
            text: TEXT_ONE.texts[selectedMessageItems],
            avatar: TEXT_ONE.avatars[selectedMessageItems],
          }}
          bottom={isDesktop ? "15rem" : "-11rem"}
          right={isDesktop && "27rem"}
          left={!isDesktop && "10%"}
          width="255px"
          height="137px"
          tooltipPosition="right"
        />
        <UsersChatMessages
          items={{
            name: TEXT_TWO.names[selectedMessageItems],
            text: TEXT_TWO.texts[selectedMessageItems],
            avatar: TEXT_TWO.avatars[selectedMessageItems],
          }}
          bottom={isDesktop ? "0" : "-27rem"}
          right={isDesktop ? "2rem" : "10%"}
          margin={"0 auto"}
          width="282px"
          height="156px"
          tooltipPosition="left"
        />
        <Flex direction="column" gap={63}>
          <Flex
            direction="column"
            align={isDesktop ? "flex-start" : "center"}
            width={isDesktop ? 50 : 100}
            margin="47px 0 0 0"
            gap={25}
          >
            <Typography
              weight={800}
              tAlign={!isDesktop && "center"}
              size={isDesktop ? 70 : 48}
              lHeight={isDesktop ? 98 : 67}
            >
              Reliable. Fast. Simple. <PurpleText type="light">All in one.</PurpleText>
            </Typography>
            {text}
          </Flex>
        </Flex>
        <Wrapper margin={isDesktop ? "116px 0 0 0" : "33rem 0 0 0"}>
          <RotateImage>{blocksImg}</RotateImage>
        </Wrapper>
      </Container>
    </Wrapper>
  );
};

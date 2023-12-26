import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import styled from "styled-components";
import { Typography } from "UI/UI-Kit/Styled/Typography";
import { Container } from "UI/UI-Kit/Styled/Container";
import { useStore } from "Core/store";

const Text = styled.span<{ color?: string; weight?: number }>`
  color: ${({ color }) => color};
  font-weight: ${({ weight }) => weight};
`;

export const OurMission = () => {
  const {
    store: {
      Device: { isMobileLayoutForTablet, isMobile },
    },
  } = useStore((store) => ({
    Device: store.Device,
  }));
  return (
    <Container margin="139px 0 126px 0" position="relative">
      <Marquee gradient={false} style={{ overflow: "visible" }}>
        <Typography
          weight={800}
          size={!isMobile && !isMobileLayoutForTablet ? 128 : 70}
          lHeight={!isMobile && !isMobileLayoutForTablet ? 192 : 105}
          color={"rgba(199, 173, 255, 0.05);"}
        >
          Reliable. Fast. Simple. All in one.
        </Typography>
      </Marquee>
      <Container position="absolute" top={-8} right={0} left={0} margin={"0 auto"} width={"898px"} height={"686px"}>
        <Image
          src={"/assets/images/hovers/ourMissionHoverCenter.png"}
          width={898}
          height={686}
          quality={100}
          alt={"payo-mission-hover"}
        />
      </Container>
      <Container
        position="absolute"
        top={!isMobile && !isMobileLayoutForTablet ? 7 : 3}
        padding={"0 18%"}
        left={0}
        right={0}
      >
        <Typography
          weight={400}
          size={!isMobile && !isMobileLayoutForTablet ? 36 : 20}
          lHeight={!isMobile && !isMobileLayoutForTablet ? 54 : 30}
          tAlign={"center"}
        >
          <Text weight={600}>PAYO's mission</Text> is to make cryptocurrency transfers accessible{" "}
          <Text color="rgba(173, 188, 255, 1)" weight={600}>
            to everyone
          </Text>
          . We believe that making <Text weight={600}>secure</Text> and fast payments will become easier with us!{" "}
        </Typography>
      </Container>
      <Marquee direction="right" gradient={false}>
        <Typography
          weight={800}
          size={!isMobile && !isMobileLayoutForTablet ? 128 : 70}
          lHeight={!isMobile && !isMobileLayoutForTablet ? 192 : 105}
          color={"rgba(199, 173, 255, 0.05);"}
        >
          Reliable. Fast. Simple. All in one.
        </Typography>
      </Marquee>
    </Container>
  );
};

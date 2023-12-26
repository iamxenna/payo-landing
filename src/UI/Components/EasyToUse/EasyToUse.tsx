import { mobile } from "Constants/Devices";
import { useStore } from "Core/store";
import React, { FC, useState } from "react";
import styled from "styled-components";
import { Scroll } from "UI/UI-Kit/Scroll/Scroll";
import { Flex } from "UI/UI-Kit/Styled/Flex";
import { Typography } from "UI/UI-Kit/Styled/Typography";
import { Wrapper } from "UI/UI-Kit/Styled/Wrapper";
import { Absolute } from "../../UI-Kit/Styled/Absolute";

const Screen = styled.div<{ tv: 1 | 2 }>`
  max-width: 692px;
  height: 390px;

  border: 16px solid #adbcff;
  box-shadow: inset 0px 0px 68px rgba(255, 255, 255, 0.05), inset 0px 2px 4px rgba(255, 255, 255, 0.24);
  backdrop-filter: blur(24px);
  border-radius: 60px;
  background-image: ${({ tv }) => `url(/assets/images/tvBack${tv}.png)`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  margin: 56px auto 0 auto;

  @media screen and (max-width: ${mobile}px) {
    height: 260px;
  }
`;

const TextContainer = styled.div`
  max-width: 25rem;
`;

export const EasyToUse: FC<{ tv: 1 | 2 }> = ({ tv }) => {
  const [active, setActive] = useState<number>(0);
  const items = ["Showcase", "Dashboard"];

  const {
    store: {
      Device: { isDesktop },
    },
  } = useStore((store) => ({
    Device: store.Device,
  }));

  return (
    <Wrapper margin="0 0 170px 0" position="relative" id={"product"} zIndex="1">
      <Absolute
        bgImage={"easyBallBig"}
        isActive={true}
        width={"214px"}
        height={"192px"}
        zIndex={-1}
        opacity={"1"}
        right={"18rem"}
        bottom={"8rem"}
      />
      <Absolute
        bgImage={"easyBallMedium"}
        isActive={true}
        width={"42px"}
        height={"38px"}
        zIndex={-1}
        opacity={"1"}
        left={"14.5rem"}
        top={"16rem"}
      />
      <Absolute
        bgImage={"easyBallSmall"}
        isActive={true}
        width={"43px"}
        height={"29px"}
        zIndex={-1}
        opacity={"1"}
        right={"11.5rem"}
        top={"15rem"}
      />
      <Absolute
        bgImage={"easyEllipseCover"}
        isActive={true}
        width={"455px"}
        height={"725px"}
        zIndex={-1}
        opacity={"0.2"}
        background={"#122B99"}
        filter={"blur(200px)"}
        right={"0"}
        top={"16rem"}
        left={"8rem"}
        bottom={"0"}
        mixBlendMode={"hard-light"}
        transform={"rotate(-90deg)"}
        margin={"auto"}
      />
      <Absolute
        bgImage={"easyEllipseLeft"}
        isActive={true}
        width={"320px"}
        height={"500px"}
        zIndex={-1}
        opacity={"0.2"}
        background={"#122B99"}
        filter={"blur(125px)"}
        right={"20rem"}
        top={"13rem"}
        left={"0"}
        bottom={"0"}
        mixBlendMode={"hard-light"}
        transform={"rotate(-90deg)"}
        margin={"auto"}
      />
      <Absolute
        bgImage={"easyEllipseTop"}
        isActive={true}
        width={"400px"}
        height={"700px"}
        zIndex={-1}
        opacity={"0.3"}
        background={"#C7ADFF"}
        mixBlendMode={"saturation"}
        filter={"blur(250px)"}
        right={"0"}
        left={"18rem"}
        top={"-12rem"}
        margin={"0 auto"}
        transform={"rotate(-52.48deg)"}
      />
      <Flex justify="center" gap={isDesktop ? 72 : 40} align="center" margin="0 0 32px 0">
        <TextContainer>
          <Typography tAlign="right" weight={600} size={isDesktop ? 48 : 36} lHeight={isDesktop ? 70 : 53}>
            Easy to use, easy to analyze
          </Typography>
        </TextContainer>
        <Scroll max={2} active={active} sHeight={120} sColor={"var(--blue)"} />
        <Flex direction="column" gap={28} align={"center"}>
          {items.map((el, idx) => (
            <Typography
              key={idx}
              weight={700}
              size={24}
              lHeight={31}
              color={active === idx ? "var(--blue)" : "var(--white)"}
              cursor="pointer"
              onClick={() => setActive(idx)}
            >
              {el}
            </Typography>
          ))}
        </Flex>
      </Flex>
      <Typography weight={600} lHeight={24} tAlign="center">
        Watch a video with a brief description of the main functionalities of the platform. <br /> Create a product
        card, add a description and share with customers!
      </Typography>
      <Screen tv={tv} />
    </Wrapper>
  );
};

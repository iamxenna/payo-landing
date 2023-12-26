import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import styled from "styled-components";
import { Container } from "UI/UI-Kit/Styled/Container";
import { Flex } from "UI/UI-Kit/Styled/Flex";
import { Typography } from "UI/UI-Kit/Styled/Typography";
import { PARTNERS } from "./Partners.constants";
import { Absolute } from "../../UI-Kit/Styled/Absolute";

const PartnerContainer = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid #251c2f;
  backdrop-filter: blur(10px);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 325px;
  height: 133px;

  &:last-child {
    margin-right: 32px;
  }
`;

export const Partners = () => {
  return (
    <Container>
      <Absolute
        isActive={true}
        bgImage={"partnersEllipse"}
        zIndex={-1}
        height="720px"
        width="900px"
        top="1"
        right="21rem"
      />
      <Typography weight={600} size={48} lHeight={80} tAlign={"center"} id="partners">
        Our partners
      </Typography>
      {/* <Marquee gradient={false} style={{ overflow: "visible" }}>
        <Flex gap={32} direction={"row"} margin={"56px 0 0 0"} justify="center">
          {PARTNERS.map(({ icon, width, height }, idx) => (
            <PartnerContainer key={idx}>
              <Image
                src={`/assets/images/partners/${icon}.svg`}
                width={width}
                height={height}
                quality={100}
                alt={`${icon}-asset`}
              />
            </PartnerContainer>
          ))}
        </Flex>
      </Marquee> */}
      <Marquee gradient={false} speed={200}>
        <Flex gap={32} margin={"56px 0 190px 0"} direction={"row"} justify="center">
          {PARTNERS.reverse().map(({ icon, width, height }, idx) => (
            <PartnerContainer key={idx}>
              <Image
                src={`/assets/images/partners/${icon}.svg`}
                width={width}
                height={height}
                quality={100}
                alt={`${icon}-asset`}
              />
            </PartnerContainer>
          ))}
        </Flex>
      </Marquee>
    </Container>
  );
};

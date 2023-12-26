import { Button } from "UI/UI-Kit/Button/Button";
import React from "react";
import styled from "styled-components";
import { Flex } from "UI/UI-Kit/Styled/Flex";
import { Typography } from "UI/UI-Kit/Styled/Typography";
import { Wrapper } from "UI/UI-Kit/Styled/Wrapper";
import { useStore } from "Core/store";
import { Absolute } from "../../UI-Kit/Styled/Absolute";

const MiddleBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

const Container = styled.div<{ type: "mini" | "large" }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ type }) => (type === "mini" ? "90px" : "165px")};
  width: ${({ type }) => (type === "mini" ? "256px" : "348px")};
  background: rgba(255, 255, 255, 0.04);
  box-shadow: inset 0px 0px 68px rgba(255, 255, 255, 0.05), inset 0px 2px 4px rgba(255, 255, 255, 0.24);
  backdrop-filter: blur(30px);
  border-radius: 20px;
`;

export const StartForFree = () => {
  const {
    store: {
      Device: { isDesktop },
    },
  } = useStore((store) => ({
    Device: store.Device,
  }));
  return (
    <Wrapper position="relative" zIndex={"1"}>
      <Absolute
        bgImage={"usingEllipseLeft"}
        isActive={true}
        height={"100px"}
        width={"860px"}
        zIndex={-1}
        opacity={"0.2"}
        background={"#122B99"}
        filter={"blur(125px)"}
        top={"10rem"}
        bottom={"0"}
        margin={"auto 0"}
        left={"0"}
        mixBlendMode={"hard-light"}
      />
      <Absolute
        bgImage={"usingEllipseRight"}
        isActive={true}
        height={"150px"}
        width={"1000px"}
        zIndex={-1}
        opacity={"0.4"}
        background={"rgba(205, 0, 255, 0.56)"}
        filter={"blur(125px)"}
        right={"0"}
        top={"10rem"}
        bottom={"0"}
        margin={"auto 0"}
      />
      <Absolute
        bgImage={"usingEllipseCover"}
        isActive={true}
        height={"930px"}
        width={"500px"}
        zIndex={-1}
        opacity={"0.1"}
        background={"rgba(127, 51, 129, 0.6)"}
        filter={"blur(125px)"}
        transform={"matrix(0.97, 0.24, -0.48, 0.88, 0, 0)"}
        right={"0"}
        left={"0"}
        top={"0"}
        margin={"0 auto"}
      />
      <Typography weight={500} size={48} lHeight={56} tAlign={"center"}>
        Start using the platform for free
      </Typography>
      <Flex justify="center" margin="73px auto 175px auto">
        <Flex direction={isDesktop ? "row" : "column"} align={!isDesktop ? "center" : "flex-start"} gap={20}>
          <Container type="large">
            <Typography lHeight={24} tAlign="center">
              Our 1% transaction fee <br /> is the lowest among <br /> the competition
            </Typography>
          </Container>
          <MiddleBlock>
            <Container type="mini">
              <Typography tAlign="center">
                You don't have to go <br /> through KYC
              </Typography>
            </Container>
            <ButtonWrapper>
              <Button
                onClick={() => window.open("https://app.payo.one", "_blank")}
                variant={"primary"}
                width={"259px"}
                height={"59px"}
              >
                Try for free
              </Button>
              <Typography family="Inter" size={12} color="#AAA5A5" tAlign="center">
                By clicking the button, I consent <br /> to the processing of personal data
              </Typography>
            </ButtonWrapper>
          </MiddleBlock>
          <Container type="large">
            <Typography lHeight={24} tAlign="center">
              Instant payments: with PAYO <br /> you get your money instantly
              <br /> into your wallet.
            </Typography>
          </Container>
        </Flex>
      </Flex>
    </Wrapper>
  );
};

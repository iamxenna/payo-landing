import React, { useCallback } from "react";
import styled from "styled-components";
import { Button } from "UI/UI-Kit/Button/Button";
import { useInput } from "hooks/useInput";
import { Input } from "UI/UI-Kit/Input/Input";
import { Flex } from "UI/UI-Kit/Styled/Flex";
import { Typography } from "UI/UI-Kit/Styled/Typography";
import { Wrapper } from "UI/UI-Kit/Styled/Wrapper";
import { useStore } from "Core/store";
import { tablet } from "Constants/Devices";
import { Absolute } from "../../UI-Kit/Styled/Absolute";
import { HttpClient } from "libs/HttpClient";
import { Notification } from "libs/Notification";

const FormContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 22px;
  background: linear-gradient(0deg, rgba(18, 20, 33, 0.4), rgba(18, 20, 33, 0.4)), rgba(255, 255, 255, 0.04);
  box-shadow: inset 0px 0px 68px rgba(255, 255, 255, 0.05), inset 0px 2px 4px rgba(255, 255, 255, 0.24);
  backdrop-filter: blur(24px);
  max-width: 756px;
  min-height: 354px;
  border-radius: 50px;
  padding: 32px 99px;
  margin: 48px auto 190px auto;

  @media screen and (max-width: ${tablet}px) {
    padding: 53px 28px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  bottom: -4.9rem;
  left: 0;
  right: 0;
  margin: auto;
  position: absolute;
`;

export const ContactUs = () => {
  const { state: nameState, dispatch: nameDispatch } = useInput("", "text");
  const { state: emailState, dispatch: emailDispatch } = useInput("", "email");
  const { state: commentState, dispatch: commentDispatch } = useInput("", "bigText");

  const sendClickHandler = useCallback(async () => {
    try {
      await HttpClient.post("/contact", {
        name: nameState,
        email: emailState,
        comment: commentState,
      });
      Notification.success("Your message was successfully sent");
    } catch (err) {
      Notification.error("There was a failure while sending, try again");
    }
  }, [nameState, emailState, commentState]);

  const {
    store: {
      Device: { isDesktop },
    },
  } = useStore((store) => ({
    Device: store.Device,
  }));
  return (
    <Wrapper
      backgroundImage="/assets/images/contactUsBackground.png"
      bgPosition="bottom"
      id="contactus"
      position="relative"
      zIndex={"1"}
    >
      <Absolute
        bgImage={"contactEllipseLeft"}
        isActive={true}
        width={"1400px"}
        height={"900px"}
        zIndex={-1}
        opacity={"0.5"}
        background={"radial-gradient(50% 50% at 50% 50%, rgba(205, 0, 255, 0.7) 0%, rgba(205, 0, 255, 0) 100%);"}
        filter={"blur(125px)"}
        mixBlendMode={"hard-light"}
        left={"0rem"}
        top={"-11rem"}
        transform={"rotate(-180deg)"}
      />
      <Absolute
        bgImage={"contactEllipseRight"}
        isActive={true}
        width={"1000px"}
        height={"650px"}
        zIndex={-1}
        opacity={"0.5"}
        background={"radial-gradient(50% 50% at 50% 50%, #122B99 0%, rgba(205, 0, 255, 0) 100%);"}
        filter={"blur(125px)"}
        mixBlendMode={"hard-light"}
        right={"-2rem"}
        top={"7rem"}
        transform={"rotate(176.28deg)"}
      />
      <Flex gap={24} direction="column" align="center">
        <Typography weight={600} size={isDesktop ? 48 : 36} lHeight={isDesktop ? 65 : 48}>
          Do you want to contact us?
        </Typography>
        <Typography weight={400} size={isDesktop ? 24 : 18} lHeight={isDesktop ? 31 : 23}>
          We will gladly consider your cooperation proposals
        </Typography>
      </Flex>
      <FormContainer>
        <Flex gap={16} direction={isDesktop ? "row" : "column"}>
          <Input
            value={nameState}
            onChange={nameDispatch}
            label={"Enter your name:"}
            type={"text"}
            placeholder={"Your name"}
            variant={"usual"}
          />
          <Input
            value={emailState}
            onChange={emailDispatch}
            label={"Enter your e-mail:"}
            placeholder={"Your e-mail"}
            type={"text"}
            variant={"usual"}
          />
        </Flex>
        <Input
          value={commentState}
          onChange={commentDispatch}
          label={"You can leave a comment:"}
          placeholder={"Your comment"}
          type={"text"}
          variant={"textarea"}
        />

        <ButtonWrapper>
          <Button onClick={sendClickHandler} variant={"primary"} height={"59px"}>
            Send request
          </Button>
          <Typography family="Inter" size={12} color="#AAA5A5" tAlign="center">
            By clicking the button, I consent <br /> to the processing of personal data
          </Typography>
        </ButtonWrapper>
      </FormContainer>
    </Wrapper>
  );
};

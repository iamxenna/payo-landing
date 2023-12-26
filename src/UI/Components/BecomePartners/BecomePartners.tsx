import React, { ChangeEvent, useCallback } from "react";
import { useStore } from "Core/store";
import { useInput } from "hooks/useInput";
import { Button } from "UI/UI-Kit/Button/Button";
import { Input } from "UI/UI-Kit/Input/Input";
import { Flex } from "UI/UI-Kit/Styled/Flex";
import { PurpleText } from "UI/UI-Kit/Styled/PurpleText";
import { Typography } from "UI/UI-Kit/Styled/Typography";
import { Wrapper } from "UI/UI-Kit/Styled/Wrapper";
import { Absolute } from "../../UI-Kit/Styled/Absolute";
import { HttpClient } from "libs/HttpClient";
import { Notification } from "libs/Notification";

export const BecomePartners = () => {
  const { state: nameState, dispatch: nameDispatch, error: nameError } = useInput("");
  const { state: emailState, dispatch: emailDispatch, error: emailError } = useInput("");
  const {
    store: {
      Device: { isDesktop },
    },
  } = useStore((store) => ({
    Device: store.Device,
  }));
  const sendClickHandler = useCallback(async () => {
    try {
      await HttpClient.post("/contact", {
        name: nameState,
        email: emailState,
      });
      Notification.success("Your message was successfully sent");
    } catch (err) {
      Notification.error("There was a failure while sending, try again");
    }
  }, [nameState, emailState]);
  return (
    <Wrapper margin="0 auto 150px auto" width={isDesktop ? "100%" : "90%"} position="relative" zIndex="1">
      <Typography weight={500} size={32} lHeight={56} tAlign={"center"}>
        Do you want to join and become <br /> one of <PurpleText type="light">PAYO's partners</PurpleText>?
      </Typography>
      <Flex
        margin="48px auto 0 auto"
        direction={isDesktop ? "row" : "column"}
        width={!isDesktop ? 100 : 70}
        align={"flex-start"}
        gap={16}
      >
        <Input
          label={"Enter your name:"}
          type={"text"}
          variant={"usual"}
          value={nameState}
          placeholder={"Your name"}
          onChange={(e: ChangeEvent<HTMLInputElement>) => nameDispatch(e)}
        />
        <Input
          label={"Enter your e-mail:"}
          type={"text"}
          variant={"usual"}
          value={emailState}
          placeholder={"Your e-mail"}
          onChange={(e: ChangeEvent<HTMLInputElement>) => emailDispatch(e)}
        />
        <Flex direction="column" gap={12} width={100} align="center" margin="27px 0 0 0">
          <Button onClick={sendClickHandler} variant={"primary"} height={"59px"} width={"100%"}>
            Send request
          </Button>
          <Typography family="Inter" size={12} lHeight={16} color="#AAA5A5" tAlign="center">
            By clicking the button, I consent <br /> to the processing of personal data
          </Typography>
        </Flex>
      </Flex>
      <Absolute
        isActive={true}
        bgImage={"partnersLeft"}
        zIndex={-1}
        height="598px"
        width="1134px"
        top="-4rem"
        left="0"
      />
      <Absolute
        isActive={true}
        bgImage={"partnersRight"}
        zIndex={-1}
        height="643px"
        width="1217px"
        top="-4rem"
        right="0"
      />
    </Wrapper>
  );
};

import React, { FC } from "react";
import Image from "next/image";
import { Flex } from "../Styled/Flex";
import { UsersChatMessagesProps } from "./UsersChatMessages.interfaces";
import { ImageContainer, MessageContainer, MessageWrapper, Tooltip } from "./UsersChatMessages.styles";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export const UsersChatMessages: FC<UsersChatMessagesProps> = (props) => {
  return (
    <TransitionGroup>
      <CSSTransition
        timeout={5000}
        key={props.items.text}
        classNames={{
          exitActive: "animate__animated animate__zoomOut",
          enterActive: "animate__animated animate__zoomIn",
        }}
      >
        <MessageWrapper {...props}>
          <MessageContainer width={props.width} height={props.height}>
            <Flex direction="row" gap={8} align="center">
              <ImageContainer>
                <Image
                  src={`/assets/images/usersAvatars/${props.items.avatar}.svg`}
                  width={40}
                  height={40}
                  quality={100}
                  alt={"user-avatar"}
                />
              </ImageContainer>
              <h1 className="userMessageTitle">{props.items.name}</h1>
            </Flex>
            <p className="userMessageText">{props.items.text}</p>
          </MessageContainer>
          <Tooltip position={props.tooltipPosition}>
            <Image
              src={`/assets/images/tails/${props.tooltipPosition}.svg`}
              width="26"
              height="16"
              quality={100}
              alt={"tail"}
            />
          </Tooltip>
        </MessageWrapper>
      </CSSTransition>
    </TransitionGroup>
  );
};

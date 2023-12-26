import React, { FC } from "react";
import { CSSTransition } from "react-transition-group";
import { useStore } from "Core/store";
import { Typography } from "UI/UI-Kit/Styled/Typography";
import { List, ListItem, MessageWrapper, Toolptip } from "./Message.styles";

export const Message: FC<{
  text: string | string[];
  isListed?: boolean;
  isHidden: boolean;
  position: "top" | "bottom";
}> = ({ text, position, isListed, isHidden }) => {
  const {
    store: {
      Device: { isMobile, isMobileLayoutForTablet },
    },
  } = useStore((store) => ({
    Device: store.Device,
  }));
  return (
    <CSSTransition
      in={isHidden}
      classNames={{
        exitActive: "animate__animated animate__zoomIn",
      }}
      timeout={1000}
    >
      <MessageWrapper isHidden={isHidden} position={position}>
        {isListed && typeof text !== "string" ? (
          <List>
            {text.map((el, idx) => (
              <ListItem key={idx}>
                <Typography
                  family="Inter"
                  weight={700}
                  size={isMobile || isMobileLayoutForTablet ? 12 : 16}
                  lHeight={22}
                >
                  {el}
                </Typography>
              </ListItem>
            ))}
          </List>
        ) : (
          <Typography family="Inter" tAlign="center" weight={700} lHeight={22}>
            {text}
          </Typography>
        )}
        {!isMobileLayoutForTablet && !isMobile && <Toolptip position={position} />}
      </MessageWrapper>
    </CSSTransition>
  );
};

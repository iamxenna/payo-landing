import React, { FC } from "react";
import { useStore } from "Core/store";
import { Typography } from "../Styled/Typography";
import { FariaFlipBox, FlipBoxBack, FlipBoxFront, Inner } from "./TransparentTextContainer.styles";

interface ITransparentTextContainer {
  texts: { front: string; back: string };
  isReverted: boolean;
  clickHandler(): void;
}

export const TransparentTextContainer: FC<ITransparentTextContainer> = ({ texts, clickHandler, isReverted }) => {
  const {
    store: {
      Device: { isDesktop },
    },
  } = useStore((store) => ({
    Device: store.Device,
  }));
  return (
    <FariaFlipBox>
      <FlipBoxFront isRevert={isReverted} onMouseEnter={clickHandler}>
        <Inner>
          <Typography
            size={isDesktop ? 24 : 18}
            weight={500}
            lHeight={isDesktop ? 36 : 24}
            tAlign={"center"}
            cursor={"pointer"}
          >
            {texts.front}
          </Typography>
        </Inner>
      </FlipBoxFront>
      <FlipBoxBack isRevert={isReverted} onMouseEnter={clickHandler}>
        <Typography
          size={isDesktop ? 20 : 16}
          weight={500}
          lHeight={isDesktop ? 32 : 24}
          tAlign={"center"}
          cursor={"pointer"}
        >
          {texts.back}
        </Typography>
      </FlipBoxBack>
    </FariaFlipBox>
  );
};

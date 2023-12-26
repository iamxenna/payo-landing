import React, { FC } from "react";
import {
  RoadmapContainer,
  RoadmapWrapper,
  Line,
  FilledLine,
  Circle,
  Item,
  ItemsContainer,
  TextContainer,
} from "./RTSRoadmap.styles";
import { RTS } from "./RTSRoadmap.constants";
import { Typography } from "UI/UI-Kit/Styled/Typography";
import { Message } from "./Message/Message";
import { useStore } from "Core/store";
import { Absolute } from "../../../UI-Kit/Styled/Absolute";

export const RTSRoadmap: FC<{ activeTab: number }> = ({ activeTab }) => {
  const {
    store: {
      Device: { isDesktop },
    },
  } = useStore((store) => ({
    Device: store.Device,
  }));
  return (
    <RoadmapWrapper>
      <RoadmapContainer>
        <Line>
          <FilledLine active={activeTab} />
        </Line>
        <ItemsContainer>
          {RTS.map((el, idx) => (
            <Item>
              <Message text={el.text as unknown as string} isHidden={idx > activeTab} position={"top"} />
              <Circle isActive={activeTab >= idx}>
                <Absolute
                  bgImage={"roadmapBall"}
                  zIndex={-1}
                  fWidth={"950px"}
                  fHeight={"950px"}
                  isActive={activeTab >= idx}
                  opacity={activeTab >= idx ? "1" : "0"}
                />
              </Circle>
              <TextContainer>
                <Typography
                  weight={600}
                  tAlign={"center"}
                  size={isDesktop ? 24 : 16}
                  lHeight={isDesktop ? 36 : 20}
                  color={"var(--purple-dark)"}
                >
                  {el.title}
                </Typography>
              </TextContainer>
            </Item>
          ))}
        </ItemsContainer>
      </RoadmapContainer>
    </RoadmapWrapper>
  );
};

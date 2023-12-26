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
} from "./Roadmap.styles";
import { ROADMAP_TEXT } from "../PayoRoadmap.constants";
import { Typography } from "UI/UI-Kit/Styled/Typography";
import { Message } from "./Message/Message";
import { useStore } from "Core/store";
import { Absolute } from "../../../UI-Kit/Styled/Absolute";

export const Roadmap: FC<{ activeTab: number }> = ({ activeTab }) => {
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
          {ROADMAP_TEXT.map((el, idx) => (
            <Item>
              {idx % 2 === 0 && isDesktop && <Message text={el.text} isHidden={idx > activeTab} position={"top"} />}
              {!isDesktop && (
                <TextContainer isEven={idx % 2 !== 0}>
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
              )}
              <Circle isActive={activeTab >= idx}>
                <Absolute
                  bgImage={"roadmapBall"}
                  zIndex={-1}
                  fWidth={"950px"}
                  fHeight={"950px"}
                  opacity={activeTab >= idx ? "1" : "0"}
                />
              </Circle>
              {isDesktop && (
                <TextContainer isEven={idx % 2 === 0}>
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
              )}
              {(idx % 2 !== 0 || !isDesktop) && (
                <Message text={el.text} isHidden={idx > activeTab && isDesktop} position={"bottom"} />
              )}
            </Item>
          ))}
        </ItemsContainer>
      </RoadmapContainer>
    </RoadmapWrapper>
  );
};

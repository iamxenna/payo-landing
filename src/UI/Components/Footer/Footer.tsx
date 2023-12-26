import React from "react";
import styled from "styled-components";
import { Flex } from "UI/UI-Kit/Styled/Flex";
import { Typography } from "UI/UI-Kit/Styled/Typography";

interface LineContainerProps {
  purplePosition: "left" | "right";
}

const LineContainer = styled.div<LineContainerProps>`
  width: 100%;
  background: rgba(180, 157, 148, 0.2);
  display: flex;
  justify-content: ${({ purplePosition }) => (purplePosition === "left" ? "flex-start" : "flex-end")};
  flex-direction: row;
  border-radius: 20px;
  height: 3px;
`;

const PurpleLine = styled.div`
  height: 3px;
  width: 68px;
  background: var(--purple-dark);
  border-radius: 20px;
`;

export const Footer = () => {
  return (
    <Flex direction="row" align="center" margin="0 0 50px 0" gap={24}>
      <LineContainer purplePosition="right">
        <PurpleLine />
      </LineContainer>
      <Typography family="Inter" opacity={0.2} wrap={false}>
        PAYO. All rights reserved.
      </Typography>
      <LineContainer purplePosition="left">
        <PurpleLine />
      </LineContainer>
    </Flex>
  );
};

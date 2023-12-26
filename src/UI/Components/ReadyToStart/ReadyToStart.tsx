import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { RTSRoadmap } from "./RTSRoadmap/RTSRoadmap";
import { Flex } from "UI/UI-Kit/Styled/Flex";
import { PurpleText } from "UI/UI-Kit/Styled/PurpleText";
import { Typography } from "UI/UI-Kit/Styled/Typography";
import { useInView } from "react-intersection-observer";

const RTSWrapper = styled.div`
  margin: 126px 0 170px 0;
`;

export const ReadyToStart = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (!inView || (activeTab === 2 && activeTab)) return;
    let i = 0;
    function increase() {
      setTimeout(() => {
        setActiveTab((prev) => (prev += 1));
        i++;
        if (i < 2) {
          increase();
        }
      }, 1000);
    }
    increase();
  }, [inView]);
  return (
    <RTSWrapper ref={ref}>
      <Flex direction="column" align="center" gap={24} margin="0 0 72px 0">
        <Typography weight={600} size={48} lHeight={72}>
          Ready to Start?
        </Typography>
        <Typography size={18} lHeight={27} tAlign={"center"}>
          Registration on our platform consists of <PurpleText type="dark">three simple steps</PurpleText>
        </Typography>
      </Flex>
      <RTSRoadmap activeTab={activeTab} />
    </RTSWrapper>
  );
};

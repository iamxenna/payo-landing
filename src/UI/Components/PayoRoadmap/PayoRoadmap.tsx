import React, { useEffect, useState } from "react";
import { Roadmap } from "./Roadmap/Roadmap";
import { Container } from "UI/UI-Kit/Styled/Container";
import { PurpleText } from "UI/UI-Kit/Styled/PurpleText";
import { Typography } from "UI/UI-Kit/Styled/Typography";
import { ROADMAP_TEXT } from "./PayoRoadmap.constants";
import { Absolute } from "../../UI-Kit/Styled/Absolute";
import { useInView } from "react-intersection-observer";

export const PayoRoadmap = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (!inView || (activeTab === 4 && activeTab)) return;
    let i = 0;
    function increase() {
      setTimeout(() => {
        setActiveTab((prev) => (prev += 1));
        i++;
        if (i < 4) {
          increase();
        }
      }, 1000);
    }
    increase();
  }, [inView]);
  return (
    <Container id="roadmap" ref={ref}>
      <Typography tAlign="center" weight={600} size={48} lHeight={70}>
        Look at our <PurpleText type="light">roadmap</PurpleText>
      </Typography>
      <Roadmap activeTab={activeTab} />
    </Container>
  );
};

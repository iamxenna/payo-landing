import { mobileLayoutForTablet, tablet } from "Constants/Devices";
import styled from "styled-components";

const percents = {
  0: 15,
  1: 33,
  2: 50,
  3: 68,
  4: 85,
};

const RoadmapWrapper = styled.div`
  width: 100%;
  height: 62rem;
  display: flex;
  margin-bottom: 150px;

  @media screen and (max-width: ${tablet}px) {
    height: auto;
    margin: 86px 0 86px 0;
  }
`;

const RoadmapContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  position: relative;
  @media screen and (max-width: ${tablet}px) {
    flex-direction: column;
    height: 100%;
    gap: 20px;
  }
`;

const Circle = styled.div<{ isActive: boolean }>`
  width: 55px;
  height: 55px;
  background: ${({ isActive }) => (isActive ? "#f0adff" : "transparent")};
  border: 1px solid var(--purple-dark);
  box-shadow: ${({ isActive }) =>
    isActive &&
    "inset 10px 10px 10px rgba(11, 8, 18, 0.6), inset -10px 10px 10px rgba(11, 8, 18, 0.6), inset -10px -10px 10px rgba(11, 8, 18, 0.6), inset 10px -10px 10px rgba(11, 8, 18, 0.6)"};
  backdrop-filter: blur(5px);
  border-radius: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Line = styled.div`
  width: 100%;
  height: 6px;
  position: absolute;
  bottom: 0;
  top: 0;
  margin: auto 0;
  display: flex;
  background: linear-gradient(
    90deg,
    rgba(66, 51, 99, 0) 5.03%,
    rgba(66, 51, 99, 0.7) 30.03%,
    rgba(66, 51, 99, 0.969773) 51.39%,
    rgba(66, 51, 99, 0.7) 71.18%,
    rgba(66, 51, 99, 0) 94.1%
  );
  @media screen and (max-width: ${tablet}px) {
    width: 8px;
    height: 100%;
    bottom: 0;
    left: 0;
    right: 18.7rem;
    margin: 0 auto;
    position: absolute;
    background: linear-gradient(
      180deg,
      rgba(66, 51, 99, 0) 5.03%,
      rgba(66, 51, 99, 0.7) 30.03%,
      rgba(66, 51, 99, 0.969773) 51.39%,
      rgba(66, 51, 99, 0.7) 71.18%,
      rgba(66, 51, 99, 0) 94.1%
    );
  }

  @media screen and (max-width: ${mobileLayoutForTablet}px) {
    right: 8rem;
  }
`;

const FilledLine = styled.div<{ active: number }>`
  background: linear-gradient(45deg, #08060f 6.21%, #f0adff 89.02%);
  width: ${({ active }) => percents[active]}%;
  transition: width 1s linear;
  @media screen and (max-width: ${tablet}px) {
    width: 6px;
    transform: rotate(180deg);
    height: ${({ active }) => percents[active]}%;
    transition: height 1s linear;
  }
`;

const TextContainer = styled.div<{ isEven: boolean }>`
  position: absolute;
  top: ${({ isEven }) => (isEven ? "4rem" : "-3rem")};
  bottom: 0;
  margin: auto 0;
  @media screen and (max-width: ${tablet}px) {
    position: static;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  @media screen and (max-width: ${tablet}px) {
    flex-direction: row;
    justify-content: center;
  }
  @media screen and (max-width: ${mobileLayoutForTablet}px) {
    gap: 16px;
  }
`;

export { RoadmapWrapper, RoadmapContainer, Circle, Line, FilledLine, Item, ItemsContainer, TextContainer };

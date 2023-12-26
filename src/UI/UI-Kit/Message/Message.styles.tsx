import { mobileLayoutForTablet } from "Constants/Devices";
import styled from "styled-components";

const MessageWrapper = styled.div<{ isHidden: boolean; position: "top" | "bottom" }>`
  position: absolute;
  background: linear-gradient(0deg, rgba(18, 20, 33, 0.4), rgba(18, 20, 33, 0.4)), rgba(255, 255, 255, 0.04);
  box-shadow: inset 0px 0px 68px rgba(173, 188, 255, 0.05), inset 0px 2px 4px rgba(240, 173, 255, 0.24);
  backdrop-filter: blur(24px);
  border-radius: 20px;
  width: 376px;
  min-height: 171.35px;
  padding: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 59px;
  bottom: ${({ position }) => position === "top" && "4rem"};
  top: ${({ position }) => position === "bottom" && "8rem"};
  visibility: ${({ isHidden }) => isHidden && "hidden"};

  @media screen and (max-width: ${mobileLayoutForTablet}px) {
    width: 190px;
    min-height: 50px;
    position: static;
    padding: 25px;
    margin-bottom: 0;
    margin-left: 6px;
  }
`;

const Toolptip = styled.div<{ position: "top" | "bottom" }>`
  display: block;
  width: 42px;
  height: 42px;
  background-color: inherit;
  border: inherit;
  position: absolute;
  bottom: ${({ position }) => position === "top" && "-1.3rem"};
  top: ${({ position }) => position === "bottom" && "-1.3rem"};
  left: 0;
  right: 0;
  margin: 0 auto;
  box-shadow: inset 0px 0px 68px rgba(173, 188, 255, 0.05), inset 0px 2px 4px rgba(240, 173, 255, 0.24);
  clip-path: polygon(0% 0%, 100% 100%, 0% 100%);
  transform: ${({ position }) => (position === "bottom" ? "rotate(135deg)" : "rotate(-45deg)")};
  border-radius: 0 0 0 20px;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ListItem = styled.li`
  color: var(--white);
`;

export { MessageWrapper, Toolptip, List, ListItem };

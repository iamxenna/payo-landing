import styled from "styled-components";

const MessageWrapper = styled.div<{ top?: string; left?: string; right?: string; bottom?: string; margin?: string }>`
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
  margin: ${({ margin }) => margin};
  position: absolute;
  z-index: 2;
`;

const MessageContainer = styled.div<{ width: string; height: string }>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background: var(--white);
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-radius: 24px;
  padding: 18px 15px;
`;

const ImageContainer = styled.div`
  background: linear-gradient(161.73deg, rgba(199, 173, 255, 0.4) 6.47%, rgba(93, 48, 104, 0.4) 118.83%);
  border: 1px solid #ebebeb;
  border-radius: 100%;
  width: 40px;
  height: 40px;
  overflow: hidden;
`;

const Tooltip = styled.div<{ position: "left" | "right" }>`
  position: absolute;
  bottom: -1.4rem;
  left: ${({ position }) => position === "left" && "10px"};
  right: ${({ position }) => position === "right" && "10px"};
`;

export { MessageContainer, MessageWrapper, Tooltip, ImageContainer };

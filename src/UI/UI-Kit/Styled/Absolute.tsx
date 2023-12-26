import Image from "next/image";
import { FC } from "react";
import styled from "styled-components";

interface AbsoluteProps {
  top?: string;
  left?: string;
  bottom?: string;
  right?: string;
  width?: string;
  height?: string;
  fWidth?: string;
  fHeight?: string;
  bgImage: string;
  zIndex: number;
  isActive?: boolean;
  transform?: string;
  opacity?: string;
  filter?: string;
  background?: string;
  mixBlendMode?: string;
  margin?: string;
}

const AbsoluteWrapper = styled.div<AbsoluteProps>`
  position: absolute;
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
  top: ${({ top }) => top};
  max-width: ${({ width }) => width};
  max-height: ${({ height }) => height};
  width: ${({ fWidth }) => fWidth || "100%"};
  height: ${({ fHeight }) => fHeight || "100%"};
  z-index: ${({ zIndex }) => zIndex};
  opacity: ${({ opacity }) => opacity};
  filter: ${({ filter }) => filter};
  background: ${({ background }) => background};
  margin: ${({ margin }) => margin};
`;

export const Absolute: FC<AbsoluteProps> = (props) => (
  <AbsoluteWrapper {...props}>
    <Image
      src={`/assets/images/hovers/${props.bgImage}.svg`}
      width={props.width || props.fWidth}
      height={props.height || props.fHeight}
      alt={`${props.bgImage}-asset`}
      quality={100}
    />
  </AbsoluteWrapper>
);

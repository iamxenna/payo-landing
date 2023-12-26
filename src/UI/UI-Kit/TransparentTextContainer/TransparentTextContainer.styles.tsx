import styled from "styled-components";
import { mobile, mobileLayoutForTablet } from "Constants/Devices";

const FariaFlipBox = styled.div`
  -ms-transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-perspective: 1000px;
  perspective: 1000px;
`;

const FlipBoxFront = styled.div<{ isRevert: boolean }>`
  z-index: 2;
  cursor: pointer;
  -ms-transform: rotateY(0deg);
  -webkit-transform: rotateY(0deg);
  transform: rotateY(0deg);
  -webkit-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  transform-style: preserve-3d;

  -ms-transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  -webkit-transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);

  background-position: center;
  background-size: cover;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;

  --height: 221px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.04);
  box-shadow: inset 0px 0px 68px rgba(255, 255, 255, 0.05), inset 0px 2px 4px rgba(255, 255, 255, 0.24);
  backdrop-filter: blur(30px);
  border-radius: 20px;
  width: 100%;
  height: var(--height);

  @media only screen and (max-width: ${mobile}px) {
    :root {
      --height: 166px;
    }
  }

  ${(props) =>
    props.isRevert &&
    `
    -ms-transform: rotateY(-180deg);
    -webkit-transform: rotateY(-180deg);
    transform: rotateY(-180deg);
    -webkit-transform-style: preserve-3d;
    -ms-transform-style: preserve-3d;
    transform-style: preserve-3d;
  `}
`;

const FlipBoxBack = styled.div<{ isRevert: boolean }>`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  cursor: pointer;

  display: flex;
  align-items: center;

  padding: 0 1rem;

  width: 100%;

  -ms-transform: rotateY(180deg);
  -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg);
  -webkit-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  transform-style: preserve-3d;

  -ms-transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  -webkit-transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);

  --height: 221px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.04);
  box-shadow: inset 0px 0px 68px rgba(255, 255, 255, 0.05), inset 0px 2px 4px rgba(255, 255, 255, 0.24);
  backdrop-filter: blur(30px);
  border-radius: 20px;
  height: var(--height);

  ${(props) =>
    props.isRevert &&
    `
        -ms-transform: rotateY(0deg);
        -webkit-transform: rotateY(0deg);
        transform: rotateY(0deg);
        -webkit-transform-style: preserve-3d;
        -ms-transform-style: preserve-3d;
        transform-style: preserve-3d;
  `}

  background-position: center;
  background-size: cover;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;

  @media only screen and (max-width: ${mobile}px) {
    :root {
      --height: 166px;
    }
  }
`;

const Inner = styled.div`
  position: absolute;
  cursor: pointer;
  z-index: 2;
  top: 50%;
  left: 0;
  padding: 0 26%;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  -webkit-transform: translateY(-50%) translateZ(60px) scale(0.94);
  -ms-transform: translateY(-50%) translateZ(60px) scale(0.94);
  transform: translateY(-50%) translateZ(60px) scale(0.94);

  -webkit-perspective: inherit;
  perspective: inherit;

  @media screen and (max-width: ${mobileLayoutForTablet}px) {
    padding: 0 16%;
  }
`;

export { FariaFlipBox, FlipBoxBack, FlipBoxFront, Inner };

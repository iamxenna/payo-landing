import { mobile } from "Constants/Devices";
import { useStore } from "Core/store";
import Image from "next/image";
import React, { FC } from "react";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";

const ScrollWrapper = styled.div`
  position: fixed;
  bottom: 1rem;
  left: 0;
  z-index: 3;

  @media screen and (max-width: ${mobile}px) {
    left: -1.5rem;
    bottom: -1rem;
  }
`;

export const ScrollToTop: FC<{ isVisible: boolean }> = ({ isVisible }) => {
  const {
    store: {
      Device: { isDesktop },
    },
  } = useStore((store) => ({
    Device: store.Device,
  }));
  return (
    <CSSTransition
      in={isVisible}
      classNames={{
        exitActive: "animate__animated animate__fadeOutUp",
        enterActive: "animate__animated animate__fadeInUp",
      }}
      unmountOnExit
      timeout={5000}
    >
      <ScrollWrapper onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <Image
          src={"/assets/images/rocket.svg"}
          style={{ cursor: "pointer" }}
          width={isDesktop ? "167" : "130"}
          height="191"
          quality={100}
          alt={"payo-rocket"}
        />
      </ScrollWrapper>
    </CSSTransition>
  );
};

import React, { FC, ReactNode } from "react";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";

const MenuWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  z-index: 4;
  padding: 0 30px 30px 30px;
`;

const Text = styled.p`
  font-family: "SF Pro Display", sans-serif;
  font-weight: 700;
  font-size: 15px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.05em;
  color: #100c1a;
  flex: none;
  order: 2;
  flex-grow: 0;
  margin: 15px 0;
  cursor: pointer;
`;

const ItemContainer = styled.div`
  background: var(--white);
  border-radius: 26px;
  width: 100%;
  padding: 0 15px;
`;

export const MenuResp: FC<{ children: ReactNode; isVisible: boolean; onClose(): void }> = ({
  children,
  isVisible,
  onClose,
}) => {
  return (
    <CSSTransition
      in={isVisible}
      classNames={{
        exitActive: "animate__animated animate__fadeOutDown",
        enterActive: "animate__animated animate__fadeInUp",
      }}
      unmountOnExit
      timeout={5000}
    >
      <MenuWrapper>
        {children}
        <ItemContainer onClick={onClose}>
          <Text>Cancel</Text>
        </ItemContainer>
      </MenuWrapper>
    </CSSTransition>
  );
};

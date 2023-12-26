import React, { FC } from "react";
import styled from "styled-components";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { AnchorItems } from "Components/Header/Header.constants";
import { useRouter } from "next/router";
import { MenuResp } from "../MenuResp/MenuResp";

const ItemContainer = styled.div`
  background: var(--white);
  border-radius: 26px;
  width: 100%;
  padding: 0 15px;
`;

const ItemWrapper = styled.div`
  &:not(:last-child) {
    border-bottom: 1px solid #cacacc;
  }
`;

const Item = styled.div`
  padding: 15px 0;
  font-family: "Inter";
  font-weight: 700;
  font-size: 15px;
  line-height: 138.52%;
  letter-spacing: 0.05em;
  color: #100c1a;
  text-align: center;
  cursor: pointer;
`;

export const HeaderMenuResp: FC<{ isVisible: boolean; onClose(): void }> = ({ isVisible, onClose }) => {
  const router = useRouter();
  const routes = [
    {
      title: router.route !== "/about-us" ? "About team" : "About product",
      onClick: () => (router.route === "/about-us" ? router.push("/") : router.push("/about-us")),
    },
    { title: "Jump on the platform", onClick: () => window.open("https://app.payo.one") },
  ];
  return (
    <MenuResp onClose={onClose} isVisible={isVisible}>
      <ItemContainer>
        {AnchorItems.map((el, idx) => (
          <ItemWrapper>
            <AnchorLink onClick={onClose} offset={() => 150} href={el.anchor}>
              <Item key={idx}>{el.title}</Item>
            </AnchorLink>
          </ItemWrapper>
        ))}
      </ItemContainer>
      <ItemContainer>
        {routes.map((el, idx) => (
          <ItemWrapper>
            <Item
              onClick={() => {
                el.onClick();
                onClose();
              }}
              key={idx}
            >
              {el.title}
            </Item>
          </ItemWrapper>
        ))}
      </ItemContainer>
    </MenuResp>
  );
};

import React, { FC } from "react";
import Image from "next/image";
import styled from "styled-components";
import { SOCIAL_NETWORKS } from "Components/HelpCircle/HelpCircle.constants";
import { MenuResp } from "../MenuResp/MenuResp";
import { tablet } from "Constants/Devices";
const ItemContainer = styled.div`
  background: var(--white);
  border-radius: 26px;
  width: 100%;
  padding: 0 25px;
`;

const ItemWrapper = styled.div`
  &:not(:last-child) {
    border-bottom: 1px solid #cacacc;
  }
`;

const Item = styled.div`
  padding: 25px 0;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 138.52%;
  letter-spacing: 0.05em;
  color: #100c1a;
  text-align: center;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 39px;
  padding: 31px 25px;

  @media screen and (max-width: ${tablet}px) {
    padding: 31px 0px;
  }
`;

export const HelpCircleResp: FC<{ isVisible: boolean; onClose(): void }> = ({ onClose, isVisible }) => {
  const items = [
    {
      title: "Help & documentation",
      icon: "file",
      onClick: "",
    },
    {
      title: "Message support",
      icon: "message",
      onClick: "",
    },
    {
      title: "Terms & privacy",
      icon: "document",
      onClick: "",
    },
  ];
  return (
    <MenuResp onClose={onClose} isVisible={isVisible}>
      <ItemContainer>
        {items.map((el, idx) => (
          <ItemWrapper key={idx}>
            <Item>
              <Image
                src={`/assets/images/helpCircle/${el.icon}.svg`}
                width={31}
                height={27}
                quality={100}
                alt={"payo-circle"}
              />
              <p>{el.title}</p>
            </Item>
          </ItemWrapper>
        ))}
        <LinkContainer>
          {SOCIAL_NETWORKS.map((el, idx) => (
            <div key={idx} onClick={() => window.open(el.link, "_blank")} style={{ cursor: "pointer" }}>
              <Image
                src={`/assets/images/socials/${el.icon}.svg`}
                width={58}
                height={58}
                quality={100}
                alt={"payo-social-network"}
              />
            </div>
          ))}
        </LinkContainer>
      </ItemContainer>
    </MenuResp>
  );
};

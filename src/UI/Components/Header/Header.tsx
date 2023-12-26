import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { useRouter } from "next/router";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Flex } from "UI/UI-Kit/Styled/Flex";
import { Button } from "UI/UI-Kit/Button/Button";
import { AnchorItems } from "./Header.constants";
import { Typography } from "UI/UI-Kit/Styled/Typography";
import { headerHeight } from "../../../../styles/global";

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 var(--paddings);
  z-index: 3;
  position: inherit;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 26px;
  padding: 0 8px 0 32px;
  height: ${headerHeight}px;
  backdrop-filter: blur(30px);
  background: rgba(26, 12, 35, 0.6);
`;

export const Header = () => {
  const router = useRouter();
  return (
    <Wrapper>
      <Container>
        <Flex align="center" justify="space-between" width={100} margin={"0 8px"}>
          <Image src={"/assets/images/Logo.svg"} width={87} height={36} quality={100} alt="payo-logo" />
          <Flex gap={40}>
            {AnchorItems.map((el, idx) => {
              if (el?.is && el?.is !== router.pathname) return;
              return (
                <AnchorLink key={idx} offset={el.offset} href={el.anchor}>
                  <Typography cursor="pointer">{el.title}</Typography>
                </AnchorLink>
              );
            })}
          </Flex>
          <Flex gap={16}>
            {router.route === "/about-us" ? (
              <Button variant="border" onClick={() => router.push("/")}>
                About product
              </Button>
            ) : (
              <Button variant="border" onClick={() => router.push("/about-us")}>
                About us
              </Button>
            )}
            <Button variant="secondary" onClick={() => window.open("https://app.payo.one", "_blank")}>
              Jump on the platform
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Wrapper>
  );
};

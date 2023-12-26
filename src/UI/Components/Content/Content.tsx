import React, { useMemo, useEffect, useRef, memo, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import { useStore } from "Core/store";
import { Header } from "Components/Header/Header";
import { Footer } from "Components/Footer/Footer";
import { HelpCircle } from "Components/HelpCircle/HelpCircle";
import { BurgerMenu } from "Components/BurgerMenu/BurgerMenu";
import { ScrollToTop } from "Components/ScrollToTop/ScrollToTop";
import { useInView } from "react-intersection-observer";
import { HeaderMenuResp } from "Components/Modals/HeaderMenuResp/HeaderMenuResp";
import { HelpCircleResp } from "Components/Modals/HelpCircleResp/HelpCircleResp";

type ContentManagerProps = {
  appProps: AppProps;
};

const Wrapper = styled.main<{ isFull?: boolean }>`
  width: 100%;
  height: ${({ isFull }) => isFull && "100vh"};
  background: var(--bgColor);
  display: block;
  padding: var(--marginTop) 0 0 0;
  position: relative;
  overflow-x: hidden;
`;

const Container = styled.div`
  width: 100%;
  font-size: 1rem;
`;

const MemoizedFooter = memo(Footer);

function Content(props: ContentManagerProps) {
  const { Component, pageProps } = props.appProps;
  const dispatch = useDispatch();
  const router = useRouter();
  const lastActive = useRef<"burger" | "header" | null>(null);
  const [isOpenHeaderMenuResp, setIsOpenHeaderMenuResp] = useState<boolean>(false);
  const [isHelpOpen, setIsHelpOpen] = useState<boolean>(false);
  const { inView, ref } = useInView({
    delay: 1,
  });

  const {
    store: {
      Device: { burgerActive, isMobile, headerActive, isTablet, isMobileLayoutForTablet },
    },
    actions: {
      Device: { setBurgerActive, setHeaderActive },
    },
  } = useStore((store) => ({
    Device: store.Device,
  }));

  useEffect(() => {
    if (burgerActive) {
      if (lastActive.current == "burger") {
        dispatch(setBurgerActive(false));
      } else {
        dispatch(setHeaderActive(false));
      }
    } else {
      if (burgerActive) {
        lastActive.current = "burger";
      } else if (headerActive) {
        lastActive.current = "header";
      }
    }
  }, [burgerActive, headerActive, dispatch]);

  const isNotFound = useMemo(() => {
    return router.pathname !== "/" && router.pathname !== "/about-us";
  }, []);

  const MemoizedComponent = useMemo(() => <Component {...pageProps} />, [pageProps, Component]);

  if (isNotFound) {
    return (
      <>
        <Wrapper isFull>
          <Container>{MemoizedComponent}</Container>
        </Wrapper>
      </>
    );
  }

  return (
    <>
      <Wrapper>
        {!isMobile && !isMobileLayoutForTablet && !isTablet ? (
          <Header />
        ) : (
          <BurgerMenu isOpenHeaderMenuResp={isOpenHeaderMenuResp} setIsOpenHeaderMenuResp={setIsOpenHeaderMenuResp} />
        )}
        <div ref={ref} />
        <Container>{MemoizedComponent}</Container>
        <MemoizedFooter />
        <HelpCircle openResp={() => setIsHelpOpen(true)} />
        <ScrollToTop isVisible={!inView} />
        <HeaderMenuResp isVisible={isOpenHeaderMenuResp} onClose={() => setIsOpenHeaderMenuResp(false)} />
        <HelpCircleResp isVisible={isHelpOpen} onClose={() => setIsHelpOpen(false)} />
      </Wrapper>
    </>
  );
}

export default Content;

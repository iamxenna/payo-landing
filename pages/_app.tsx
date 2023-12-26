import { appWithTranslation } from "next-i18next";
import { useDispatch } from "react-redux";
import { AppProps } from "next/app";
import { useEffect } from "react";
import Head from "next/head";
import { NextSeo } from "next-seo";
import { mobile, mobileLayoutForTablet, tablet } from "Constants/Devices";
import ContentManager from "Components/Content/Content";
import wrapper, { useStore } from "Core/store";
import GlobalStyles from "../styles/global";
import "../styles/fonts.css";
import "../styles/styles.css";
import "../styles/notification.css";
import "animate.css";
import { NotificationComponent } from "libs/Notification";

function PayoApp(appProps: AppProps) {
  const dispatch = useDispatch();
  const {
    actions: {
      App: { setAppLoaded },
      Device: { setBurgerActive, setDesktop, setMobile, setMobileLayoutForTablet, setTablet },
    },
  } = useStore((store) => ({
    Device: store.Device,
    App: store.App,
  }));

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= mobile) {
        dispatch(setMobile());
      } else if (window.innerWidth <= mobileLayoutForTablet) {
        dispatch(setMobileLayoutForTablet());
        dispatch(setBurgerActive(false));
      } else if (window.innerWidth <= tablet) {
        dispatch(setTablet());
        dispatch(setBurgerActive(false));
      } else {
        dispatch(setDesktop());
        dispatch(setBurgerActive(false));
      }
    };

    const handleOnLoad = () => {
      dispatch(setAppLoaded());
    };

    const alreadyLoaded = document.readyState == "complete";

    if (alreadyLoaded) {
      handleOnLoad();
    } else {
      window.onload = handleOnLoad;
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        navigator.serviceWorker.register("/sw.js").then(
          function (registration) {
            console.log("Service Worker registration successful with scope: ", registration.scope);
          },
          function (err) {
            console.log("Service Worker registration failed: ", err);
          },
        );
      });
    }
  }, []);

  return (
    <>
      <Head>
        <title>Payo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>
      <NextSeo
        title="Payo. Reliable. Fast. Simple. All in one."
        description="PAYO is a decentralized fintech system that allows everyone to receive cryptocurrency for products or donations via payment links."
        canonical="https://payo.one"
        openGraph={{
          url: "https://payo.one",
          title: "Payo. Reliable. Fast. Simple. All in one.",
          description:
            "PAYO is a decentralized fintech system that allows everyone to receive cryptocurrency for products or donations via payment links.",
          images: [
            {
              url: "https://payo.one/icons/icon-192x192.png",
              width: 192,
              height: 192,
              alt: "payo-icon-192",
              type: "image/png",
            },
            {
              url: "https://payo.one/icons/icon-256x256.png",
              width: 256,
              height: 256,
              alt: "payo-icon-256",
              type: "image/png",
            },
            {
              url: "https://payo.one/icons/icon-384x384.png",
              width: 384,
              height: 384,
              alt: "payo-icon-384",
              type: "image/png",
            },
            {
              url: "https://payo.one/icons/icon-512x512.png",
              width: 512,
              height: 512,
              alt: "payo-icon-512",
              type: "image/png",
            },
          ],
          site_name: "Payo",
        }}
      />
      <ContentManager appProps={appProps} />
      <GlobalStyles />
      <NotificationComponent />
    </>
  );
}

export default appWithTranslation(wrapper.withRedux(PayoApp));

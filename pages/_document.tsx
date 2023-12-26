import Document, { Html, Head, Main, NextScript } from "next/document";
import type { DocumentContext } from "next/document";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
          <link
            rel="preload"
            as="font"
            href="/assets/fonts/Poppins/Poppins-Medium.ttf"
            crossOrigin="anonymous"
            type="font/truetype"
          />
          <link
            rel="preload"
            as="font"
            href="/assets/fonts/Poppins/Poppins-Regular.ttf"
            crossOrigin="anonymous"
            type="font/truetype"
          />
          <link
            rel="preload"
            as="font"
            href="/assets/fonts/Poppins/Poppins-SemiBold.ttf"
            crossOrigin="anonymous"
            type="font/truetype"
          />
          <meta name="application-name" content="PAYO" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-title" content="PAYO" />
          <meta name="description" content="Reliable. Fast. Simple. All in one." />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="msapplication-config" content="/icons/browserconfig.xml" />
          <meta name="msapplication-TileColor" content="#0B0812" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#0B0812" />
          <link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/icons/touch-icon-ipad.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/icons/touch-icon-iphone-retina.png" />
          <link rel="apple-touch-icon" sizes="167x167" href="/icons/touch-icon-ipad-retina.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#0B0812" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content="https://payo.one/" />
          <meta name="twitter:title" content="Payo. Reliable. Fast. Simple. All in one." />
          <meta
            name="twitter:description"
            content="PAYO is a decentralized fintech system that allows everyone to receive cryptocurrency for products or donations via payment links."
          />
          <meta name="twitter:image" content="https://payo.one/icons/icon-512x512.png" />
          <meta name="twitter:creator" content="@dsavochkin" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="PAYO" />
          <meta
            property="og:description"
            content="PAYO is a decentralized fintech system that allows everyone to receive cryptocurrency for products or donations via payment links."
          />
          <meta property="og:site_name" content="Payo. Reliable. Fast. Simple. All in one." />
          <meta property="og:url" content="https://payo.one/" />
          <meta property="og:image" content="https://payo.one/icons/icon-512x512.png" />
          {/* <!-- Google tag (gtag.js) --> */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-Q4KSYYW0PR"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-Q4KSYYW0PR');
            `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

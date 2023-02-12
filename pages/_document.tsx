import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="A student and self taught developer from Thailand."
        />
        <meta property="og:title" content="Podter" />
        <meta
          property="og:description"
          content="A student and self taught developer from Thailand."
        />
        <meta property="og:url" content="https://podter.xyz/" />
        <meta property="og:site_name" content="podter.xyz" />
        <meta
          property="og:image"
          content="http://preview.podter.xyz/api/og?title=podter.xyz"
        />
        <meta property="og:image:width" content="1920" />
        <meta property="og:image:height" content="1080" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

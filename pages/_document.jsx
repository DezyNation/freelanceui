import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { CssBaseline } from '@nextui-org/react';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: React.Children.toArray([initialProps.styles])
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {CssBaseline.flush()}
          <meta property="og:title" content="DezyNation" />
          <meta property="og:description" content="We build free websites for NGOs." />
          <meta property="og:image" content="https://link.storjshare.io/raw/jvc6hx67i7hojnsro6hic6g76vsa/website-assets/socialshare.png" />
          <meta property="og:url" content="https://dezynation.com/" />
          <meta name="twitter:card" content="summary_large_image" />
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

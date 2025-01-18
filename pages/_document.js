import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>,
        ],
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          {this.props.styleTags}
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta property="og:locale" content="en-US" />
          <meta property="og:type" content="website" />

          {/* Favicon links */}
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />

          {/* Font faces */}
          <style
            dangerouslySetInnerHTML={{
              __html: `
              @font-face {
                font-family: 'YourFont';
                src: url("/fonts/Regular.otf");
                font-weight: normal;
                font-display: swap;
                font-style: normal;
              }
              
              @font-face {
                font-family: 'YourFont';
                src: url("/fonts/Medium.otf");
                font-weight: 500;
                font-display: swap;
                font-style: normal;
              }
              
              @font-face {
                font-family: 'YourFont';
                src: url("/fonts/Bold.otf");
                font-weight: bold;
                font-display: swap;
                font-style: normal;
              }
            `,
            }}
          />

          {/* Base Styles */}
          <link rel="stylesheet" href="/css/normalize.css" />
          <link rel="stylesheet" href="/css/base.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

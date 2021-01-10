import Document, { Html, Head, Main, NextScript } from 'next/document'
import { SeoConfig } from '../seo.config'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head lang={'zh-cn'}>
          <meta charSet="UTF-8" />
          <link rel="manifest" href="/manifest.json" />

          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="application-name" content={SeoConfig.title} />
          <meta name="apple-mobile-web-app-title" content={SeoConfig.title} />
          <meta name="msapplication-tooltip" content={SeoConfig.title} />
          <meta name="theme-color" content="#27ae60" />
          <meta name="msapplication-navbutton-color" content="#27ae60" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />

          <meta name="msapplication-starturl" content="/" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

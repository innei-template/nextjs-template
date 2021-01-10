import { AppProps } from 'next/dist/next-server/lib/router/router'
import Head from 'next/head'
import React from 'react'
import 'assets/styles/main.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, viewport-fit=cover,initial-scale=1, maximum-scale=1"
        />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp

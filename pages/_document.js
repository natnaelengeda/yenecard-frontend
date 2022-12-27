import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" data-theme="light">
      <Head>
         <link rel="manifest" href="../manifest.json" />
         <meta name="theme-color" content='#fff'/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

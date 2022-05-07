import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Mochiy+Pop+P+One&family=Mohave:wght@300&family=Open+Sans:ital,wght@0,300;0,400;1,300&family=Roboto:wght@300&display=swap" rel="stylesheet" />
      </Head>
      <body className='h-full w-full'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
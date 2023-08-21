import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicon.ico" />

        <link rel="stylesheet" type="text/css" charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
{/* 
        <script
          src="https://kit.fontawesome.com/0f83e5d3b7.js"
          crossorigin="anonymous"
        ></script> */}


      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Richard Ejdling</title>
        <meta name='description' content="Richard Ejdling's Portfolio Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charset="UTF-8" />
        <link rel="icon" href="/favicon/favicon_portfolio_R_small.ico" />

        <meta property="og:title" content="Richard Ejdling" />
        <meta property="og:description" content="Richard Ejdling's Portfolio Page." />
        <meta property="og:image" content="/open_graph_img.png" />
        <meta property="og:url" content="https://richardejdling.vercel.app" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Richard Ejdling" />
        <meta name="twitter:description" content="Richard Ejdling's Portfolio Page." />
        <meta name="twitter:image" content="twitter_small.png" />
        <meta name="twitter:url" content="https://richardejdling.vercel.app" />


        <link rel="canonical" href="https://richardejdling.vercel.app" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

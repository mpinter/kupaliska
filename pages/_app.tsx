import Head from 'next/head'
import Link from 'next/link'

export const App = ({ Component, pageProps }): JSX.Element => (
  <div>
    <Head>
      <title>Kupaliska</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="header">
      <img src="/ba-logo-white.svg" className="logo" />
    </div>
    <div className="container">
      <Component {...pageProps} />
    </div>
    <footer>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
      </a>
    </footer>
    <style jsx>
      {`
        .header {
          width: 100%;
          height: 20px;
          padding: 10px;
          background-color: red;
          display: flex;
          flex-direction: row;
        }

        .logo {
          height: 100%;
        }

        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}
    </style>
    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }
    `}</style>
  </div>
)

export default App

import Head from 'next/head'
import Link from 'next/link'

export const App = ({ Component, pageProps }): JSX.Element => (
  <div>
    <Head>
      <title>Kupaliska</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap"
        rel="stylesheet"
      />
    </Head>
    <div className="header">
      <Link href="/">
        <a>
          <img src="/ba-logo-white.svg" className="logo" />
        </a>
      </Link>
    </div>
    <div className="starz-header">STARZ</div>
    <Component {...pageProps} />
    <style jsx>
      {`
        .header {
          width: 100%;
          height: 20px;
          padding: 10px;
          background-color: #d81c24;
          display: flex;
          flex-direction: row;
        }

        .starz-header {
          width: 100%;
          padding: 25px;
          background-color: #fefefe;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          box-shadow: 0px 2px 2px lightgray;
          font-weight: bold;
          color: #d81c24;
          font-size: 18px;
        }

        .logo {
          height: 100%;
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
        font-family: 'Lato', sans-serif;
      }

      .button {
        background-color: #d81c24;
        color: white;
        font-weight: bold;
        font-size: 0.9rem;
        padding: 10px 15px;
        border-radius: 5px;
        margin: 10px 0px;
        cursor: pointer;
        box-shadow: 0px 2px 2px lightgray;
        transition: ease background-color 250ms;
        border: 0;
      }

      .button:hover {
        background-color: #e01f26;
      }
      .button:disabled {
        cursor: default;
        opacity: 0.7;
      }
    `}</style>
  </div>
)

export default App

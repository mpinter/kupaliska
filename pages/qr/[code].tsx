import { GetServerSideProps } from 'next'
import { client } from '../../utils/gql'
import QRCode from 'react-qr-code'
import React, { useRef } from 'react'
import dynamic from 'next/dynamic'

const ReactToPdf = dynamic(() => import('react-to-pdf'), { ssr: false })

export const Qr = ({ id }): JSX.Element => {
  const ref = useRef()
  return (
    <div className="container">
      <main>
        <h1 className="title">Vas listok</h1>

        <p className="description">
          Prosim preukazte sa pri vstupe. Na mail zatial nic nedostanete, ale
          mozete si ho stiahnut.
        </p>
        <ReactToPdf targetRef={ref} filename="qr-kupalisko.pdf">
          {({ toPdf }) => (
            <button onClick={toPdf} className="button">
              Stiahnut
            </button>
          )}
        </ReactToPdf>

        <div className="card" ref={ref} style={{ width: 256, height: 256 }}>
          <QRCode value={id} />
        </div>
      </main>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  console.log(ctx.params)
  const entry = await client.Ticket({ id: ctx.params.code })
  if (!entry?.tickets_by_pk?.id || !entry?.tickets_by_pk?.was_paid)
    return { notFound: true }
  console.log(entry)
  return {
    props: { id: entry?.tickets_by_pk?.id },
  }
}

export default Qr

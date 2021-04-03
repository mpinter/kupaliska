import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { MdShoppingCart } from 'react-icons/md'
import RedTitle from '../components/RedTitle'

export const Home = (): JSX.Element => (
  <div>
    <main>
      <RedTitle title="E-shop" />

      <div className="grid">
        <div className="card">
          <div className="card-content">
            <h3>Celosezonna permanentka</h3>
            <p>
              Proident veniam excepteur amet nostrud laboris. Sunt tempor ad
              voluptate eiusmod
            </p>
            <div className="row">
              <Link href="/single-entry">
                <div className={classNames('button', 'cardButton')}>
                  Zakúpiť <MdShoppingCart />
                </div>
              </Link>
              <span className="price">33€</span>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <h3>Jednorazova vstupenka</h3>
            <p>
              Proident veniam excepteur amet nostrud laboris. Sunt tempor ad
              voluptate eiusmod
            </p>
            <div className="row">
              <Link href="/single-entry">
                <div className={classNames('button', 'cardButton')}>
                  Zakúpiť <MdShoppingCart />
                </div>
              </Link>
              <span className="price">2,99€</span>
            </div>
          </div>
        </div>
      </div>
    </main>

    <style jsx>{`
      main {
        padding: 30px;
        flex: 1;
        flex-direction: column;
        justify-content: flex-start;
      }

      h1 {
        font-weight: 900;
      }

      .price {
        font-weight: 900;
        margin: 20px;
      }

      .heroContainer {
        min-height: 100vh;
        background-image: url('/title.jpg');
        display: flex;
        flex-direction: row;
        flex: 1;
      }

      .heroContainer .heroCard {
        background: #ffffff;
        z-index: 2;
        position: absolute;
        top: 40%;
        left: 0;
        border-radius: 0 10px 10px 0;
        padding: 20px;
      }

      .cardButton {
        display: inline-block;
      }

      .buy-card {
        background: #ffffff;
        z-index: 2;
        position: absolute;
        left:0;
        right:0;
        margin-left:auto;
        margin-right:auto;
        max-width: 500px;
        border-radius: 10px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      .heroSubcontainer {
        z-index: -10;
      }

      .title {
        margin: 0;
        line-height: 1.15;
        font-size: 2rem;
      }

      .description {
        line-height: 1.5;
        font-size: 1rem;
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
        flex: 1;
        align-self: center;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 3rem;
        max-width: 1250px;
        margin: auto;
      }

      @media all and (max-width: 1250px) {
        .grid {
          display: flex;
          flex-direction: column;
          align-self: center;
          justify-content: center;
        }
      }

      .grid .card {
        margin-top: 20px;
        max-width: 500px;
      }

      .card-image {
        border-radius: 10px 0 0 10px;
        width: 150px;
        height: 150px;
      }

      .card-container {
        display: flex;
        flex-direction: row;
      }

      .card-content {
        padding: 10px;
      }

      .card-content p {
        font-size: 10pt;
      }

      .card {
        flex-basis: 45%;
        text-align: left;
        # color: inherit;
        text-decoration: none;
        border: 1px solid #eaeaea;
        border-radius: 10px;
        transition: color 0.15s ease, border-color 0.15s ease;
        flex-direction: row;
        padding: 20px;
      }

      .card h3 {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
      }

      .card h1 {
        margin: 0;
      }

      .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
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

export default Home

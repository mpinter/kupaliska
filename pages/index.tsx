import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { MdShoppingCart } from 'react-icons/md'
import RedTitle from '../components/RedTitle'

export const Home = (): JSX.Element => (
  <div>
    <div className="heroContainer">
      <div className={classNames('card', 'heroCard')}>
        <h1>Jeden listok, kazde kupalisko</h1>

        <p>Zakúp si lístok a využi ho na ktoromkoľvek kúpalisku.</p>

        <Link href="/tickets">
          <div className="button">
            Chcem si zakúpiť lístok <MdShoppingCart />
          </div>
        </Link>
      </div>
    </div>
    <main>
      <RedTitle
        title="Kupaliska"
        subtitle="kde mozes vyuzivat svoju permanentku"
      />

      <div className="grid">
        <div className="card">
          <div className="card-container">
            <img src="/pool.jpg" className="card-image" />
            <div className="card-content">
              <h3>Delfin</h3>
              <p>
                Proident veniam excepteur amet nostrud laboris. Sunt tempor ad
                voluptate eiusmod ad elit velit do consequat nisi nostrud
                deserunt ex. Aute duis qui cupidatat sit enim non id voluptate
                proident incididunt Lorem.
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-container">
            <img src="/pool.jpg" className="card-image" />
            <div className="card-content">
              <h3>Tehelne pole</h3>
              <p>
                Proident veniam excepteur amet nostrud laboris. Sunt tempor ad
                voluptate eiusmod ad elit velit do consequat nisi nostrud
                deserunt ex. Aute duis qui cupidatat sit enim non id voluptate
                proident incididunt Lorem.
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-container">
            <img src="/pool.jpg" className="card-image" />
            <div className="card-content">
              <h3>Zlate piesky</h3>
              <p>
                Proident veniam excepteur amet nostrud laboris. Sunt tempor ad
                voluptate eiusmod ad elit velit do consequat nisi nostrud
                deserunt ex. Aute duis qui cupidatat sit enim non id voluptate
                proident incididunt Lorem.
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-container">
            <img src="/pool.jpg" className="card-image" />
            <div className="card-content">
              <h3>Rosnicka</h3>
              <p>
                Proident veniam excepteur amet nostrud laboris. Sunt tempor ad
                voluptate eiusmod ad elit velit do consequat nisi nostrud
                deserunt ex. Aute duis qui cupidatat sit enim non id voluptate
                proident incididunt Lorem.
              </p>
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

      .heroCard .button {
        display: inline-block;
      }

      @media all and (max-width: 1250px) {
        .heroContainer .heroCard {
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
        margin: 20px;
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

      .card-content h3 {
        color: #d81c24;
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

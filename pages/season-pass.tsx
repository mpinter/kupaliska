import { ErrorMessage, Field, Form, Formik } from 'formik'
import qs from 'qs'
import React from 'react'
import { oneDaySchema, seasonSchema } from '../utils/validations'
import { useSubmitTicket } from '../utils/hooks'
import TextInput from '../components/TextInput'
import Checkbox from '../components/Checkbox'
import RedTitle from '../components/RedTitle'
import classNames from 'classnames'
const Ticket = (): JSX.Element => {
  //qs.parse(location.search)
  const submit = useSubmitTicket('create-season-ticket')
  return (
    <div>
      <div className="payment-container">
        <div className="grid">
          <div className="form-section">
            <RedTitle title="Kontaktne udaje" />
            <Formik
              initialValues={{
                email: '',
                phone: '',
                name: '',
                street: '',
                city: '',
                psc: '',
                children: false,
                consent: false,
              }}
              validationSchema={seasonSchema}
              onSubmit={submit}
            >
              {({ isSubmitting }) => (
                <Form className="form">
                  <div className="field-container">
                    <TextInput name="email" short placeholder="Email" />
                    <ErrorMessage
                      name="email"
                      render={(msg) => <div className="error">{msg}</div>}
                    />
                  </div>
                  <div className="field-container">
                    <TextInput
                      type="phone"
                      name="phone"
                      short
                      placeholder="Telefonne cislo"
                    />
                    <ErrorMessage
                      name="phone"
                      render={(msg) => <div className="error">{msg}</div>}
                    />
                  </div>
                  <div className="field-container">
                    <TextInput
                      type="name"
                      name="name"
                      short
                      placeholder="Meno"
                    />
                    <ErrorMessage
                      name="name"
                      render={(msg) => <div className="error">{msg}</div>}
                    />
                  </div>
                  <div className="field-container">
                    <TextInput
                      type="street"
                      name="street"
                      short
                      placeholder="Adresa a cislo"
                    />
                    <ErrorMessage
                      name="street"
                      render={(msg) => <div className="error">{msg}</div>}
                    />
                  </div>
                  <div className="field-container">
                    <TextInput
                      type="city"
                      name="city"
                      short
                      placeholder="Mesto"
                    />
                    <ErrorMessage
                      name="city"
                      render={(msg) => <div className="error">{msg}</div>}
                    />
                  </div>
                  <div className="field-container">
                    <TextInput type="psc" name="psc" short placeholder="PSC" />
                    <ErrorMessage
                      name="psc"
                      render={(msg) => <div className="error">{msg}</div>}
                    />
                  </div>
                  <div className="field-container">
                    <Checkbox name="children" label="Pridat dieta" />
                  </div>
                  <div className="field-container">
                    <Checkbox name="consent" label="Suhlasim s podmienkami" />
                  </div>
                  <div
                    className={classNames(
                      'field-container',
                      'submit-container'
                    )}
                  >
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="button"
                    >
                      Pokracovat v nakupe
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
          <div className="recap-section">
            <RedTitle title="Artikel" />
            <div className="card">
              <div className="card-content">
                <h3>Celosezonna permanentka</h3>
                <p>
                  Proident veniam excepteur amet nostrud laboris. Sunt tempor ad
                  voluptate eiusmod
                </p>
                <div className="row">
                  <span className="price">33€</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`

      .error {
        color: red;
        font-size: 12px;
      }

      .field-container {
        margin: 10px;
      }

      .grid {
        display: flex;
        flex: 1;
        align-self: center;
        align-items: flex-start;
        justify-content: flex-start;
        flex-wrap: wrap;
        margin-top: 3rem;
        max-width: 1250px;
        margin: auto;
        margin: 50px;
      }

      @media all and (max-width: 1250px) {

        .container {
          align-content: center;
          display: flex;
        }

        .grid {
          display: flex;
          flex-direction: column;
          align-self: center;
          justify-content: center;
        }
      }

      .grid .card {
        margin: 20px;
        max-width: 300px;
      }

      card-content {
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

      @media all and (min-width: 1250px) {
        .form-section {
          dispaly: flex;
          flex: 0.5;
          border-right: 2px solid #d81c24;
        }

        .recap-section {
          margin-left: 50px;
          padding-bottom: 50px;
          border-bottom: 2px solid #d81c24;
        }
      }

      @media all and (max-width: 1250px) {
        .form-section {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-self: stretch;
          align-items: center;
        }

        .recap-section {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-self: stretch;
          align-items: center;
        }

        .submit-container {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }

      .payment-container: {
        margin: 50px;
        background-color: red;
      }
    `}
      </style>
    </div>
  )
}

export default Ticket

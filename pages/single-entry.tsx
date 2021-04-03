import { ErrorMessage, Field, Form, Formik } from 'formik'
import qs from 'qs'
import React from 'react'
import { oneDaySchema } from '../utils/validations'
import { useSubmitTicket } from '../utils/hooks'
import TextInput from '../components/TextInput'
import { MdMail } from 'react-icons/md'
import Checkbox from '../components/Checkbox'
import RedTitle from '../components/RedTitle'
const Ticket = (): JSX.Element => {
  // let persons = 1
  // // note - due to ssr this won't work if visiting url directly
  // if (process.browser) {
  //   const queryPersons = qs.parse(location.search)?.persons
  //   const parsedNumber =
  //     typeof queryPersons === 'string' && Number.parseInt(queryPersons)
  //   persons = parsedNumber || 1 // prevents NaN & 0
  // }
  const submit = useSubmitTicket('create-day-ticket')
  return (
    <div>
      <div className="payment-container">
        <div className="grid">
          <div className="form-section">
            <RedTitle title="Kontaktne udaje" />
            <Formik
              initialValues={{
                consent: '',
                phone: '',
                email: '',
                persons: null,
              }}
              validationSchema={oneDaySchema}
              onSubmit={submit}
            >
              {({ isSubmitting }) => (
                <Form>
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
                      type="number"
                      name="persons"
                      short
                      placeholder="Pocet osob"
                    />
                    <ErrorMessage
                      name="persons"
                      render={(msg) => <div className="error">{msg}</div>}
                    />
                  </div>
                  <div className="field-container">
                    <Checkbox name="consent" label="Suhlasim s podmienkami" />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="button"
                  >
                    Pokracovat v nakupe
                  </button>
                </Form>
              )}
            </Formik>
          </div>
          <div className="recap-section">
            <RedTitle title="Artikel" />
            <div className="card">
              <div className="card-content">
                <h3>Jednorazova vstupenka</h3>
                <p>
                  Proident veniam excepteur amet nostrud laboris. Sunt tempor ad
                  voluptate eiusmod
                </p>
                <div className="row">
                  <span className="price">2,99€</span>
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

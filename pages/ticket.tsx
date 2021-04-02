import { ErrorMessage, Field, Form, Formik, useFormik } from 'formik'
import { useRouter } from 'next/router'
import qs from 'qs'
import React from 'react'
import { oneDaySchema } from '../utils/validations'

const Ticket = (): JSX.Element => {
  //qs.parse(location.search)
  const router = useRouter()
  return (
    <div>
      <Formik
        initialValues={{
          consent: '',
          phone: '',
          email: '',
          persons: 1,
        }}
        validationSchema={oneDaySchema}
        onSubmit={async (values) => {
          try {
            const result = await fetch('/api/create-day-ticket', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: await JSON.stringify(values),
            })
            if (!result.ok) {
              throw new Error(result.statusText)
            }
            const json = await result.json()
            if (!json.id) {
              console.error(json)
              throw new Error('Incorrect format returned')
            }
            router.push(`/payment/${json.id}`)
          } catch (e) {
            console.error(e)
            alert('Nastala chyba - prosim skuste znova')
          }

          return true
        }}
      >
        {({ isSubmitting, submitForm }) => (
          <Form>
            <div>
              <label htmlFor="email">Email </label>
              <Field type="email" name="email" />
              <ErrorMessage
                name="email"
                render={(msg) => <div className="error">{msg}</div>}
              />
            </div>
            <div>
              <label htmlFor="phone">Phone </label>
              <Field type="phone" name="phone" />
              <ErrorMessage
                name="phone"
                render={(msg) => <div className="error">{msg}</div>}
              />
            </div>
            <div>
              <label htmlFor="persons">Pocet osob </label>
              <Field type="number" name="persons" />
              <ErrorMessage
                name="persons"
                render={(msg) => <div className="error">{msg}</div>}
              />
            </div>
            <div>
              <label>
                <Field type="checkbox" name="consent" />
                Suhlasim s podmienkami
                <ErrorMessage
                  name="consent"
                  render={(msg) => <div className="error">{msg}</div>}
                />
              </label>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              onClick={() => submitForm()}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
      <style jsx>
        {`
          .error {
            color: red;
          }
        `}
      </style>
    </div>
  )
}

export default Ticket

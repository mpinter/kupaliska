import * as yup from 'yup'

export const baseFormSchema = yup
  .object()
  .shape({
    email: yup
      .string()
      .ensure()
      .email('error-wrong-email-format')
      .required('error-missing-email'),
    phone: yup
      .string()
      .ensure()
      .min(13, 'error-missing-phone')
      .required('error-missing-phone'),
    consent: yup
      .string()
      .ensure()
      .required()
      .default('false')
      .oneOf(['true'], 'error-missing-consent'),
  })
  .noUnknown()

export const oneDaySchema = yup
  .object()
  .shape({
    persons: yup.number().required().positive().integer(),
  })
  .noUnknown()
  .concat(baseFormSchema)

export const seasonSchema = yup
  .object()
  .shape({
    name: yup.string().ensure().required('error-missing-name'),
    street: yup.string().ensure().required('error-missing-name'),
    city: yup.string().ensure().required('error-missing-name'),
    psc: yup
      .string()
      .ensure()
      .min(5, 'error-missing-psc')
      .max(5, 'err')
      .matches(/^[^0-9]+$/, 'err')
      .required('error-missing-psc'),
  })
  .noUnknown()
  .concat(baseFormSchema)

export const entryRequest = yup
  .object()
  .shape({
    id: yup.string().required(),
    facility: yup.string().required(), // TODO one-of enum
  })
  .noUnknown()

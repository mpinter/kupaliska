import * as yup from 'yup'

export const verificationRequestBodySchema = yup
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
      .min(14, 'error-missing-phone')
      .required('error-missing-phone'),
  })
  .noUnknown()

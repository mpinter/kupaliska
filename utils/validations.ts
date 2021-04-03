import * as yup from 'yup'

export const baseFormSchema = yup
  .object()
  .shape({
    email: yup
      .string()
      .ensure()
      .email('Chybajuca alebo nespravna hodnota')
      .required('Chybajuca alebo nespravna hodnota'),
    phone: yup
      .string()
      .ensure()
      .min(13, 'Chybajuca alebo nespravna hodnota')
      .required('Chybajuca alebo nespravna hodnota'),
    consent: yup
      .string()
      .ensure()
      .required()
      .default('false')
      .oneOf(['true'], 'Chybajuca alebo nespravna hodnota'),
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
    name: yup.string().ensure().required('Chybajuca alebo nespravna hodnota'),
    street: yup.string().ensure().required('Chybajuca alebo nespravna hodnota'),
    city: yup.string().ensure().required('Chybajuca alebo nespravna hodnota'),
    children: yup
      .string()
      .ensure()
      .required()
      .default('false')
      .oneOf(['true'], 'Chybajuca alebo nespravna hodnota'),
    psc: yup
      .string()
      .ensure()
      .min(5, 'Chybajuca alebo nespravna hodnota')
      .max(5, 'Chybajuca alebo nespravna hodnota')
      .matches(/^[0-9]+$/, 'Chybajuca alebo nespravna hodnota')
      .required('Chybajuca alebo nespravna hodnota'),
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

import { Field } from 'formik'
import React from 'react'

const Checkbox = (props) => {
  return (
    <>
      <Field name={props.name}>
        {({ field, form }) => (
          <label className="label">
            {props.label}
            <input
              type="checkbox"
              {...props}
              checked={field.value === 'true'}
              onChange={() => {
                if (field.value === 'true')
                  form.setFieldValue(props.name, 'false')
                else form.setFieldValue(props.name, 'true')
              }}
            />
            <span className="checkmark" />
          </label>
        )}
      </Field>
      <style jsx>{`
        .label {
          display: flex;
          align-items: center;
          position: relative;
          margin-bottom: 0;
          cursor: pointer;
          line-height: 24px;
          padding-left: 32px;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
        .label input {
          position: absolute;
          opacity: 0;
          cursor: pointer;
          height: 0;
          width: 0;
        }
        .checkmark {
          position: absolute;
          top: 5px;
          left: 0;
          height: 16px;
          width: 16px;
          background: #fbf4ef;
          border-radius: 3px;
        }
        .label input:checked ~ .checkmark {
          background: #d81c24;
        }
        .checkmark:after {
          content: '';
          position: absolute;
          display: none;
        }
        .label input:checked ~ .checkmark:after {
          display: block;
        }
        .label .checkmark:after {
          left: 5.5px;
          top: 2.5px;
          width: 3px;
          height: 7px;
          border: solid #fff;
          border-width: 0 2px 2px 0;
          -webkit-transform: rotate(36deg);
          -ms-transform: rotate(36deg);
          transform: rotate(36deg);
        }
        @media (max-width: 1023px) {
          .checkmark {
            border: 1px solid #dcd9d8;
          }
          .label .checkmark:after {
            left: 4.5px;
            top: 1.5px;
          }
          .label input:checked ~ .checkmark {
            border: 1px solid #d81c24;
          }
        }
        @media (max-width: 767px) {
          .label {
            font-size: 14px;
            line-height: 24px;
            padding-left: 28px;
          }
          .checkmark {
            height: 12px;
            width: 12px;
          }
          .label .checkmark:after {
            left: 3.2px;
            top: 2px;
            width: 2px;
            height: 4px;
            border-width: 0 1.5px 1.5px 0;
          }
        }
      `}</style>
    </>
  )
}

export default Checkbox

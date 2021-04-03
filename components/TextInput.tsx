import cn from 'classnames'
import { Field } from 'formik'
import { isRegExp } from 'lodash'
import React from 'react'
import { MdLocationCity, MdMail, MdPerson, MdPhoneIphone } from 'react-icons/md'
import { FaHashtag } from 'react-icons/fa'
import { GiHouse } from 'react-icons/gi'

const TextInput = ({ short = false, allowedPattern = undefined, ...props }) => {
  // TODO would be nicer to pass this in as a component (but it does not display if done straightforwardly)
  let iconComponent = null
  switch (props.name) {
    case 'email':
      iconComponent = <MdMail size={20} color="white" />
      break
    case 'phone':
      iconComponent = <MdPhoneIphone size={20} color="white" />
      break
    case 'persons':
      iconComponent = <MdPerson size={20} color="white" />
      break
    case 'name':
      iconComponent = <MdPerson size={20} color="white" />
      break
    case 'city':
      iconComponent = <MdLocationCity size={20} color="white" />
      break
    case 'street':
      iconComponent = <GiHouse size={20} color="white" />
      break
    case 'psc':
      iconComponent = <FaHashtag size={20} color="white" />
      break
  }

  return (
    <>
      <Field name={props.name}>
        {({ form, field }) => (
          <div className="container">
            {iconComponent && (
              <span className="icon-container">{iconComponent}</span>
            )}
            <input
              {...field}
              {...props}
              onChange={
                allowedPattern && isRegExp(allowedPattern)
                  ? (e) => {
                      if (!allowedPattern.test(e.target.value)) return
                      return field.onChange(e)
                    }
                  : field.onChange
              }
              value={field.value || ''}
              disabled={form.isSubmitting || props.disabled}
              type={props.type || 'text'}
              className={cn('input', { 'input-short': short })}
            />
          </div>
        )}
      </Field>
      <style jsx>{`

      .container {
        display: flex;
        flex-direction: row;
        border-radius: 4px;

      }

      .icon-container {
        padding: 6px;
        background-color: #d81c24;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px 0 0 4px;
        border: 2px solid;
        border-color: #d81c24;
      }

      .input {
        border: 2px solid;
        border-color: #d81c24;
        outline: none;
        background: #fdf8f8;
        width: 100%;
        font-size: 16px;
        line-height: 24px;
        padding: 10px 12px;
        border-radius: 0 4px 4px 0;
      }
      .input-short {
        max-width: 200px;
      }
      ::-webkit-input-placeholder {
        # font-size: 12px;
        line-height: 20px;
        color: #91908d;
      }
      ::-moz-placeholder {
        # font-size: 12px;
        line-height: 20px;
        color: #70706f;
      }
      :-ms-input-placeholder {
        # font-size: 12px;
        line-height: 20px;
        color: #91908d;
      }
      :-moz-placeholder {
        # font-size: 12px;
        line-height: 20px;
        color: #91908d;
      }
      @media (max-width: 1023px) {
        .input {
          padding: 9px 12px;
          border: 1px solid #dcd9d8;
        }
      }
      @media (max-width: 767px) {
        .input {
          font-size: 14px;
          line-height: 22px;
        }
      }
    `}</style>
    </>
  )
}

export default TextInput

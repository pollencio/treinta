import React from 'react'
import styled from 'styled-components'
import Icon from 'components/atoms/Icon'
import StyledInput from './StyledInput'
import Select from './Select'
import DatePicker from './DatePicker'

function Input(props) {
  const { id, icon, type, label } = props

  return (
    <InputWrapper icon={icon}>
      {label && <label htmlFor={id}>{label}</label>}

      {type === 'select' ? (
        // Select Input
        <Select {...props} />
      ) : type === 'date' ? (
        // Date Input
        <DatePicker {...props} />
      ) : (
        // The rest of Inputs
        <StyledInput {...props} />
      )}
      {icon && <Icon className='input-icon' icon={icon} />}
    </InputWrapper>
  )
}

const InputWrapper = styled.label`
  display: inline-block;
  position: relative;

  i {
    color: ${(props) => props.theme.input.placeholderColor};
    font-size: 1.2em;
    top: 50%;
    position: absolute;
    transform: translate(0%, -50%);

    &.input-icon {
      left: 0.5em;
    }

    &.select-arrow {
      cursor: pointer;
      margin-left: -1.4em;
    }
  }

  label {
    font-weight: 500;
    color: ${(props) => props.theme.title.color};
    margin-bottom: 0.26em;
    display: inline-block;
  }

  ${(props) =>
    props.icon &&
    `
    input, select {
      padding-left: 2.2em;
    }
  `}

  input:focus + i, select:focus + i {
    color: ${(props) => props.theme.text.color};
  }
`

export default Input

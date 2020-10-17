import React from 'react'
import styled from 'styled-components'
import StyledInput from './StyledInput'
import Icon from 'components/atoms/Icon'

function Select(props) {
  const { options, placeholder, hiddenPlaceholder, label } = props

  return (
    <>
      <StyledInput {...props} as='select' selectedValue=''>
        {placeholder && (
          <option hidden={hiddenPlaceholder} value='' className='placeholder'>
            {placeholder}
          </option>
        )}
        {options &&
          options.map((item) => (
            <option key={item.value} value={item.value}>
              {item.text}
            </option>
          ))}
      </StyledInput>
      <Icon
        className='select-arrow'
        style={label && { top: 'calc(50% + 0.6em)' }}
        icon='expand_more'
      />
    </>
  )
}

const StyledSelect = styled(Select)`
  select& {
    cursor: pointer;
    padding-right: 2.4em;
    appearance: none;
    -moz-appearance: none;

    option {
      color: ${(props) => props.theme.secondary};
      &.placeholder {
        // color: ${(props) => props.theme.titles_color};
        // font-family: ${(props) => props.theme.titles_font_family};
        // font-weight: bold;
      }
    }

    :invalid {
      color: ${(props) => props.theme.input_placeholder_color};
      opacity: 1;
    }
  }
`

export default StyledSelect

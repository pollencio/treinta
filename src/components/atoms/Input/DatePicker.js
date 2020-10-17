import React from 'react'
import styled from 'styled-components'
import StyledInput from './StyledInput'

function DatePicker(props) {
  // const { placeholder } = props;

  return <StyledInput {...props} />
}

const StyledDatePicker = styled(DatePicker)`
  input[type='date']& {
    position: relative;
    appearance: none;
    -moz-appearance: none;

    &::-webkit-datetime-edit-text {
      padding: 0 0.3em;
    }
    &::-webkit-inner-spin-button {
      display: none;
    }
    &::-webkit-calendar-picker-indicator {
      color: transparent;
      background: none;
      z-index: 1;
      cursor: pointer;
    }

    &:after {
      content: 'date_range';
      font-size: 1.5em;
      position: absolute;
      top: 0.4em;
      right: 0.4em;
      color: ${(props) => props.theme.input_placeholder_color};

      font-family: 'Material Icons';
      font-style: normal;
      text-transform: none;
      letter-spacing: normal;
      word-wrap: normal;
      white-space: nowrap;
      direction: ltr;

      text-rendering: optimizeLegibility; /* Support for Safari and Chrome. */
      -moz-osx-font-smoothing: grayscale; /* Support for Firefox. */
      font-feature-settings: 'liga'; /* Support for IE. */
    }
  }
`

export default StyledDatePicker

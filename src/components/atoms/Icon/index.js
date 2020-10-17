import React from 'react'
import styled from 'styled-components'

function Icon(props) {
  return (
    <i {...props}>
      {props.icon}
      {props.children}
    </i>
  )
}

const StyledIcon = styled(Icon)`
  font-family: 'Material Icons';
  display: inline-block;
  font-style: normal;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;

  text-rendering: optimizeLegibility; /* Support for Safari and Chrome. */
  -moz-osx-font-smoothing: grayscale; /* Support for Firefox. */
  font-feature-settings: 'liga'; /* Support for IE. */

  ${(props) => getIconColors};
`

const getIconColors = (props) => {
  const { theme, color, scale } = props
  const hexColor = theme.palette[color]
  return color && hexColor
    ? `color: ${scale ? hexColor[scale] : hexColor[0]}`
    : ''
}

export default StyledIcon

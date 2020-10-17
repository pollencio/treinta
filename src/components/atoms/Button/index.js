import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Spinner from 'components/atoms/Spinner'

function Button(props) {
  const { loading, children } = props

  return (
    <StyledButton {...props}>
      {loading ? <Spinner size='1em' type={3} /> : children}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  font-size: 1em;
  font-family: ${(props) => props.theme.text.fontFamily};
  display: inline-block;
  padding: 0.5em 1.4em;
  outline: none;
  border-radius: 3px;
  text-align: center;
  text-decoration: none;
  border: 1.5px solid transparent;

  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;

  ${(props) =>
    !props.disabled &&
    `
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  `}

  ${(props) => getButtonColors};
`

const getButtonColors = (props) => {
  const { theme, color, disabled } = props
  const buttonColor = disabled
    ? theme.palette.gray[4]
    : color && theme.palette[color][0]
    ? theme.palette[color]
    : theme.palette.primary[0]

  const staticRules = disabled
    ? `border: 1.5px solid ${theme.palette.gray[5]};`
    : color !== 'crazy'
    ? `border: 1.5px solid ${buttonColor};`
    : ''
  const dynamicRules = props.outlined
    ? `
    background: white;
    color: ${buttonColor};
    ${!disabled &&
      `
      &:hover {
        background: ${buttonColor};
        color: white;
      }
    `}
  `
    : props.link
    ? `
    background: transparent;
    color: ${buttonColor};
    text-decoration: underline;
    border: none;
    box-shadow: none;
  `
    : `
    background: ${buttonColor};
    color: white;
    ${!disabled &&
      `
      &:hover {
        filter: brightness(90%);
      }
    `}
  `

  return staticRules + dynamicRules
}

Button.propTypes = {
  onClick: PropTypes.func,
  outlined: PropTypes.bool,
  color: PropTypes.string,
  loading: PropTypes.bool,
}

export default Button

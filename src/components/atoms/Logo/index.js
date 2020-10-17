import React from 'react'
import styled from 'styled-components'

const logosUrl = '/img/logos'

const sizeValues = {
  small: '7em',
  medium: '9em',
  large: '11em',
  huge: '13em',
}

const StyledLogo = styled.div`
  ${(props) => `
  display: inline-block;
  max-width: calc(${sizeValues[props.size]}${
    props.type === 'icon' ? ' / 3.8' : ''
  }) !important;
  img {
    width: auto;
    max-width: 100%;
    max-height: 100%;
    ${
      props.type === 'custom'
        ? `
      background: white;
      padding: 0.25em;
      border-radius: 0.5em;
      `
        : ''
    };
  }
`}
`

function Logo(props) {
  const type = props.type ? props.type : 'horizontal'
  const color = props.color ? props.color : 'default'
  const url = type === 'custom' ? props.url : `${logosUrl}/${type}/${color}.png`

  return (
    <StyledLogo {...props}>
      <img src={url} alt='logo-me-cuido' />
    </StyledLogo>
  )
}

export default Logo

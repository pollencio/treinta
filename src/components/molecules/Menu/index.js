import React from 'react'
import styled from 'styled-components'
import Button from 'components/atoms/Button'

function Menu(props) {
  const { options, onClick } = props

  const handleClick = (action) => {
    onClick()
    action()
  }

  return (
    <div {...props}>
      {options.map((item, index) => (
        <Button
          key={'menu' + index}
          outlined={!item.primary}
          onClick={() => handleClick(item.action)}>
          {item.text}
        </Button>
      ))}
    </div>
  )
}

const StyledMenu = styled(Menu)`
  ${(props) => `
    display: ${props.active ? 'inline-flex' : 'none'};
    flex-direction: column;
    background: #FFFFFF;
    box-shadow: 0px 0px 15px rgba(17, 51, 70, 0.1);
    border-radius: 0px 0px 4px 4px;
    font-family: Nunito;
    min-width: 12em;


    & > * {
      border: none;
      text-decoration: none;

      &:not(:last-child) {
        border-bottom: solid 1.5px ${props.theme.palette.gray[5]};
      }
    }
  `}
`

export default StyledMenu

import React from 'react'
import styled from 'styled-components'
import Icon from 'components/atoms/Icon'

function ProfileButton(props) {
  const { nickname } = props
  return (
    <div {...props}>
      <span>{nickname}</span>
      <Icon icon='expand_more' />
      <img src='/img/profile/default.png' alt='profile' />
    </div>
  )
}

const StyledProfileButton = styled(ProfileButton)`
  color: ${(props) => props.theme.title.color};
  cursor: pointer;
  display: flex;
  align-items: center;

  img {
    height: 3em;
    margin-left: 0.5em;
    border-radius: 9;
  }
`

export default StyledProfileButton

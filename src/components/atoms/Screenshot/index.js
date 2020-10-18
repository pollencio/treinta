import React from 'react'
import styled from 'styled-components'

function Screenshot(props) {
  const { imageUrl } = props

  return (
    <StyledScreenshot className='screenshot'>
      <div
        className='img-container'
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
    </StyledScreenshot>
  )
}

const StyledScreenshot = styled.div``

export default Screenshot

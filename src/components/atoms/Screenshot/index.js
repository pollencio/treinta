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

const StyledScreenshot = styled.div`
  padding: 1.5em 0.7em;
  background white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15), inset 0px 4px 20px rgba(0, 0, 0, 0.15);
  border-radius: 2em;
  
  .img-container {
    height: 30em;
    width: 17em;
    background-size: cover;
    border-radius: 0.6em;
  }
`

export default Screenshot

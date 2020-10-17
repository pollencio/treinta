import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;

  .left {
    width: 55%;
  }
  .right {
    width: 45%;
  }

  .left,
  .right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > * {
      display: block;
      &:not(:last-child) {
        margin-bottom: 1.4em;
      }
    }
  }
`

function SemiHalfTemplate(props) {
  return <Wrapper {...props} />
}

export default SemiHalfTemplate

import React from 'react'
import styled from 'styled-components'

const Credits = styled.div`
  font-size: 0.9em;
  color: ${(props) => props.theme.palette.gray[4]};
  text-align: center;
  width: 100%;
  position: absolute;
  bottom: 1em;
`

export default Credits

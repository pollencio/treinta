import styled from 'styled-components'

const sizeValues = {
  small: '2em',
  medium: '4em',
  large: '8em',
  huge: '16em',
}

const getSize = (size) => {
  return sizeValues[size] ? sizeValues[size] : size
}

const StyledSpinner = styled.div`
  ${(props) => getColor};
  max-width: ${(props) => getSize(props.size)} !important;
  max-height: ${(props) => getSize(props.size)} !important;
`

const getColor = (props) => {
  const { theme, color } = props
  return color && theme.palette[color]
    ? `color: ${theme.palette[color][0]}`
    : ''
}

export default StyledSpinner

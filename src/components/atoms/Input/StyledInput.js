import styled from 'styled-components'

const StyledInput = styled.input`
  font-size: 1em;
  font-family: ${(props) => props.theme.text.fontFamily};
  border: 1px solid ${(props) => props.theme.input.borderColor};
  border-radius: 5px;
  padding: 0.6em 0.8em;
  background: white;
  outline: none;
  width: 100%;

  input& {
    width: calc(100% - 1.6em);
  }

  &:focus {
    border-color: ${(props) => props.theme.input.placeholderColor};
  }

  ::placeholder {
    color: ${(props) => props.theme.input.placeholderColor};
    opacity: 1;
  }
`
export default StyledInput

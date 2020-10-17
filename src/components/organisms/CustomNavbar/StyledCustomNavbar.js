import styled from 'styled-components'
import Navbar from 'components/atoms/Navbar'

export default styled(Navbar)`
  ${(props) => (props.path === 'login' ? 'background: transparent;' : '')}

  & > * {
    display: flex;
    align-items: center;
  }

  .navbar-left {
    .text {
      margin-left: 1em;
      h3 {
        margin-top: 0;
        margin-bottom: -0.1em;
        color: ${(props) => props.theme.text.color};
      }
      small {
        color: ${(props) => props.theme.palette.gray[3]};
      }
    }
    i {
      font-size: 1.7em;
      margin-right: 0.5em;
    }
  }

  .navbar-right {
    button {
      margin-right: 5em;
    }
  }

  .links > * {
    margin-right: 4em;
    padding: 0.3em 0.5em;
    text-decoration: none;
    color: ${(props) => props.theme.text.color};
    border-radius: 3px;

    &:hover,
    &.selected {
      background-color: ${(props) => props.theme.palette.secondary[0]};
      color: white;
    }
  }
`

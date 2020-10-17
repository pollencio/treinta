import styled from 'styled-components'

export default styled.div`
  h1 {
    text-align: center;
    color: ${(props) => props.theme.text.color};
    margin-top: 0;
  }
  p {
    color: ${(props) => props.theme.palette.gray[4]};
    margin-bottom: 1.8em;
  }
  .error {
    color: ${(props) => props.theme.palette.red[0]};
    margin-bottom: 1em;
    font-size: 0.9em;
  }

  form {
    margin-bottom: 1.8em;
    & > label:not(:first-child) {
      width: 100%;
      margin-top: 1.1em;
    }
  }

  .link {
    margin-bottom: 0.8em;
  }
`

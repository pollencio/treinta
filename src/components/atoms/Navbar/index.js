import styled from 'styled-components'

const Navbar = styled.div`
  background-color: white;
  padding: 0.4em 1.5em;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  z-index: 2;

  ${(props) =>
    props.fixed
      ? `
    position: fixed;
    top: 0;
    left: 0;
  `
      : ``}
  width: calc(100% - 3em);
  height: 3em;
`

export default Navbar

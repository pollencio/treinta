import styled from 'styled-components'

const Grid = styled.div`
  ${(props) => {
    const { columns, noMargins, margin } = props
    const columnMargin = noMargins
      ? 0
      : margin
      ? margin
      : `${(columns - 1) / columns}em`

    const columnWidth = noMargins
      ? `calc(100% / ${columns})`
      : `calc(100% / ${columns} - ${columnMargin})`

    return `
    display: flex;
    flex-wrap: wrap;

    & > * {
      width: ${columnWidth};
      ${!noMargins &&
        `
        margin-bottom: 0.8em;
        &:not(:nth-child(${columns}n)) {
          margin-right: ${columnMargin};
        }
      `}
    }
  `
  }}
`

export default Grid

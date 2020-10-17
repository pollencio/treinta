import palette from './palette'

const theme = {}

theme.primary = palette.primary[0]
theme.secondary = palette.secondary[0]

theme.palette = palette

theme.title = {
  fontFamily: 'Segoe UI, Roboto, sans-serif',
  // color: palette.secondary[2],
}

theme.text = {
  lineHeight: '1.5em',
  color: palette.gray[1],
  fontSize: '16px',
  fontFamily: 'Segoe UI, Roboto, sans-serif',
}

theme.input = {
  placeholderColor: palette.gray[5],
  borderColor: palette.gray[5],
}

export default theme

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'

// GlobalStyle
import theme from 'styles/theme'
import GlobalStyle from 'styles/GlobalStyle'
import { ThemeProvider } from 'styled-components'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)

serviceWorker.unregister()

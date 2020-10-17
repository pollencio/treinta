import React, { useState } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { auth } from 'services/firebase'

// Pages
import Home from 'components/pages/Home'
import Login from 'components/pages/Login'

function App() {
  const [user, setUser] = useState(undefined)

  auth.onAuthStateChanged((user) => {
    if (user) {
      setUser(user)
    } else {
      setUser(null)
    }
  })

  const PrivateRoute = (routeProps) => {
    return user ? <Route {...routeProps} /> : <Redirect to='login' />
  }

  const PublicRoute = (routeProps) => {
    return user ? <Redirect to='/' /> : <Route {...routeProps} />
  }

  return user === undefined ? (
    'Cargando ...'
  ) : (
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path='/' component={Home} />
        <PublicRoute exact path='/login' component={Login} />
      </Switch>
    </BrowserRouter>
  )
}

export default App

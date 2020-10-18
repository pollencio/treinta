import React, { useState } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { auth } from 'services/firebase'

// Pages
import Home from 'components/pages/Home'
import Login from 'components/pages/Login'
import Map from 'components/pages/Map'

// Components
import CustomNavbar from 'components/organisms/CustomNavbar'
import Credits from 'components/organisms/Credits'

function App() {
  const [user, setUser] = useState(undefined)
  const { currentUser } = auth

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
        <Route
          render={(props) => <CustomNavbar user={currentUser} {...props} />}
        />
      </Switch>

      <Switch>
        <PrivateRoute exact path='/' component={Home} />
        <PrivateRoute exact path='/map' component={Map} />
        <PublicRoute exact path='/login' component={Login} />
      </Switch>

      <Credits>
        Todos los derechos reservados - Diseñado y desarrollado por Yeliana
        Torres
      </Credits>
    </BrowserRouter>
  )
}

export default App

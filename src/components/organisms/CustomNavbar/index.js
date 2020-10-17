import React, { useState } from 'react'
import actions from 'services/actions'
import { Link } from 'react-router-dom'

// Components
import Button from 'components/atoms/Button'
import Logo from 'components/atoms/Logo'
import ProfileButton from 'components/molecules/ProfileButton'
import StyledCustomNavbar from './StyledCustomNavbar'
import StyledMenu from './StyledMenu'

const CustomNavbar = (props) => {
  const [menuOpened, setMenuOpened] = useState(false)
  const { user, location } = props
  const path = '/' + location.pathname.split('/')[1]

  const menu = [
    { text: 'Cerrar sesión', action: actions.logout, primary: true },
  ]

  return (
    <>
      <StyledCustomNavbar path={path}>
        <div className='navbar-left'>
          <Link to='/'>
            <Logo size='small' />
          </Link>
        </div>

        <div className='navbar-right'>
          <div className='links'>
            <Link to='/' className={path === '/' && 'selected'}>
              ¿Qué es Treinta?
            </Link>
            <Link to='/map' className={path === '/map' && 'selected'}>
              Mapa de negocios
            </Link>
          </div>

          {user ? (
            <ProfileButton
              nickname={user.displayName}
              onClick={() => setMenuOpened(!menuOpened)}
            />
          ) : (
            path !== '/login' && (
              <Button as={Link} to='/login'>
                Iniciar sesión
              </Button>
            )
          )}
        </div>
      </StyledCustomNavbar>

      <StyledMenu
        className='menu'
        options={menu}
        active={menuOpened ? 1 : 0}
        onClick={() => setMenuOpened(false)}
      />
    </>
  )
}

export default CustomNavbar

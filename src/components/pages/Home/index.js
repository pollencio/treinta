import React from 'react'
import styled from 'styled-components'

// import components
import SemiHalfTemplate from 'components/templates/SemiHalfTemplate'
import Screenshot from 'components/atoms/Screenshot'

// screenshots
const screenshotUrl = '/img/screenshots/2.jpeg'

function Home() {
  return (
    <StyledHome>
      <div className='left'>
        <Screenshot imageUrl={screenshotUrl} alt='Treinta app screenshot' />
      </div>

      <div className='right'>
        <p className='subtitle'>Treinta- Aplicación financiera gratuita</p>
        <h1 className='title'>
          Registra las transacciones de <b>tu negocio</b> desde tu celular
        </h1>

        <ol>
          <li>¡Descarga la app Treinta gratis!</li>
          <li>Gestiona las transacciones de tu negocio</li>
          <li>
            Conoce el saldo por día, semana, mes ... o cualquier periodo de
            tiempo que desees
          </li>
          <li>
            Registra deudas por pagar o por cobrar, los clientes y proveedores a
            los que les debes
          </li>
          <li>
            Haz tu vida más fácil{' '}
            <span role='img' aria-label='cool emoji'>
              😎
            </span>
          </li>
        </ol>
      </div>
    </StyledHome>
  )
}

const StyledHome = styled(SemiHalfTemplate)`
  .right {
    display: block;
    padding-right: 12em;

    .title {
      line-height: 1.5em;
      font-weight: 700;
      margin-top: 0;
      b {
        font-weight: 700;
        color: ${(props) => props.theme.secondary};
      }
    }

    .subtitle {
      font-size: 1.1em;
      color: ${(props) => props.theme.secondary};
      margin-bottom: 0.5em;
    }

    ol {
      font-size: 1.1em;
      li:not(:last-child) {
        margin-bottom: 1em;
      }
    }
  }
`

export default Home

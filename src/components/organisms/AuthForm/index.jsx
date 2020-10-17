import React, { useState } from 'react'
import actions from 'services/actions'

// components
import Button from 'components/atoms/Button'
import Input from 'components/atoms/Input'
import Spinner from 'components/atoms/Spinner'
import StyledAuthForm from './StyledAuthForm'

function AuthForm(props) {
  const [inputs, setInputs] = useState({})
  const [loading, setLoading] = useState(false)
  const [activeCardId, setActiveCardId] = useState(props.initCard)
  const [error, setError] = useState(null)
  const { cards, errorTranslation } = props
  const activeCard = cards[activeCardId]

  const handleInputChange = (event) =>
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    })

  const handleSubmit = (event) => {
    event.preventDefault()
    setLoading(true)
    setError(null)

    actions[activeCardId](inputs)
      .then(() => {
        setLoading(false)
        setInputs({})
      })
      .catch((error) => {
        setLoading(false)
        setError({
          code: error.code,
          message: errorTranslation[error.code]
            ? errorTranslation[error.code]
            : errorTranslation['default']
        })
      })
  }

  return loading ?
    <div><Spinner type={2} color='primary' /></div>
    : (
    <StyledAuthForm>
      <h1>{activeCard.title}</h1>
      <p>{activeCard.subtitle}</p>

      {error && <div className='error'>{error.message}</div>}

      {activeCard && activeCard.fields &&
        <form id='auth-form' onSubmit={handleSubmit}>
          {Object.keys(activeCard.fields).map((item) =>
            <Input
              {...activeCard.fields[item]}
              key={item}
              name={item}
              onChange={handleInputChange}
            />
          )}
        </form>
      }

      {activeCard && activeCard.links.map((item) =>
        <Button
          key={'link-' + item.cardLink}
          link
          className='link'
          onClick={() => setActiveCardId(item.cardLink)}
        >
          {item.text}
        </Button>
      )}

      {activeCard && activeCard.fields &&
        <Button type='submit' form='auth-form'>{activeCard.title}</Button>
      }
    </StyledAuthForm>
  )
}

export default AuthForm

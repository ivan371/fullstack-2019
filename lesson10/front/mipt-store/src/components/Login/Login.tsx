import React from 'react'
import { FormWrapper, FormItem } from '../styled'

interface ILoginProps {
  history: any
}

const Login: React.FC<ILoginProps> = (props) => {
  const { history } = props

  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  const onSubmit = React.useCallback(
    async (event) => {
      event.preventDefault()
      window.localStorage.setItem('auth', '123')
      const response = await fetch('http://localhost:8000/api/token/', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          password
        })
      })

      const { access, refresh } = await response.json()

      window.localStorage.setItem('access', access)
      window.localStorage.setItem('refresh', refresh)
      window.location.href = '/'
    },
    [username, password]
  )

  const onChangeUsername = React.useCallback(
    (event) => {
      setUsername(event.target.value)
    },
    [username]
  )

  const onChangePassword = React.useCallback(
    (event) => {
      setPassword(event.target.value)
    },
    [password]
  )

  return (
    <FormWrapper>
      <form>
        <FormItem>
          <label htmlFor="name">Логин</label>
          <input
            type="text"
            name="name"
            required
            value={username}
            onChange={onChangeUsername}
          />
        </FormItem>
        <FormItem>
          <label htmlFor="password">Пароль</label>
          <input
            type="password"
            name="password"
            required
            value={password}
            onChange={onChangePassword}
          />
        </FormItem>
        <button type="submit" onClick={onSubmit}>
          Войти
        </button>
      </form>
    </FormWrapper>
  )
}

export default Login

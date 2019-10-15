import React from 'react'
import { FormWrapper, FormItem } from '../styled'

interface ILoginProps {
  history: any
}

const Login: React.FC<ILoginProps> = (props) => {
  const { history } = props
  const onSubmit = React.useCallback((event) => {
    event.preventDefault()
    window.localStorage.setItem('auth', '123')
    if (history) {
      history.push('')
      window.location.reload()
    }
  }, [])

  return (
    <FormWrapper>
      <form>
        <FormItem>
          <label htmlFor="name">Логин</label>
          <input type="text" name="name" required />
        </FormItem>
        <FormItem>
          <label htmlFor="password">Пароль</label>
          <input type="password" name="price" required />
        </FormItem>
        <button type="submit" onClick={onSubmit}>
          Войти
        </button>
      </form>
    </FormWrapper>
  )
}

export default Login

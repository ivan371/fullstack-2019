import React from 'react'
import { FormWrapper, FormItem } from '../styled'

const Login: React.FC = () => {
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
        <button type="submit">Войти</button>
      </form>
    </FormWrapper>
  )
}

export default Login

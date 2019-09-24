import React from 'react'

const Login: React.FC = () => {
  return (
    <section className="create-form">
      <form>
        <div className="form-item">
          <label htmlFor="name">Логин</label>
          <input type="text" name="name" required />
        </div>
        <div className="form-item">
          <label htmlFor="password">Пароль</label>
          <input type="password" name="price" required />
        </div>
        <button type="submit">Войти</button>
      </form>
    </section>
  )
}

export default Login

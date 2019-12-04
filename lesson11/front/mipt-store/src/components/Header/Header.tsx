import React from 'react'
import { Link } from 'react-router-dom'
import getIsAuth from '../../utils/getIsAuth'
import * as S from './styled'

const Header: React.FC = () => {
  const onLogout = React.useCallback(() => {
    window.localStorage.clear()
    window.location.reload()
  }, [])

  return (
    <S.Header>
      <S.HeaderItem>
        <Link to="/">MIPT Store</Link>
      </S.HeaderItem>
      {getIsAuth() && (
        <S.HeaderItem>
          <Link to="/product-create">Разместить объявление</Link>
        </S.HeaderItem>
      )}
      <S.HeaderItem>
        {getIsAuth() ? (
          <S.LogoutButton onClick={onLogout}>Выйти</S.LogoutButton>
        ) : (
          <Link to="/login">Войти</Link>
        )}
      </S.HeaderItem>
      {!getIsAuth() && (
        <S.HeaderItem>
          <Link to="/registration">Регистрация</Link>
        </S.HeaderItem>
      )}
    </S.Header>
  )
}

export default Header

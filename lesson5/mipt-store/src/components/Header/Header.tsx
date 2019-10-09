import React from 'react'
import { Link } from 'react-router-dom'
import * as S from './styled'

const Header: React.FC = () => {
  return (
    <S.Header>
      <S.HeaderItem>
        <Link to="/">MIPT Store</Link>
      </S.HeaderItem>
      <S.HeaderItem>
        <Link to="/product-create">Разместить объявление</Link>
      </S.HeaderItem>
      <S.HeaderItem>
        <Link to="/login">Войти</Link>
      </S.HeaderItem>
    </S.Header>
  )
}

export default Header

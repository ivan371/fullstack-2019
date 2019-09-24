import React from 'react'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
  return (
    <header>
      <div className="header-item">
        <Link to="/">MIPT Store</Link>
      </div>
      <div className="header-item">
        <Link to="/product-create">Разместить объявление</Link>
      </div>
      <div className="header-item">
        <Link to="/login">Войти</Link>
      </div>
    </header>
  )
}

export default Header

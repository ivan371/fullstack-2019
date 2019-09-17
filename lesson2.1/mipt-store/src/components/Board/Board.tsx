import React from 'react'
import { Link } from 'react-router-dom'
import image from '../../assets/image.jpg'

const Board: React.FC = () => {
  return (
    <section className="board">
      <Link to="/product/">
        <div className="board-item">
          <img src={image} alt="Изображение" />
          <div className="board-item_content">
            <div className="board-item_content_title">Мобильный телефон</div>
            <div className="board-item_content_price">8 0000</div>
          </div>
        </div>
      </Link>
      <Link to="/product/">
        <div className="board-item">
          <img src={image} alt="Изображение" />
          <div className="board-item_content">
            <div className="board-item_content_title">Ноутбук</div>
            <div className="board-item_content_price">10 0000</div>
          </div>
        </div>
      </Link>
      <Link to="/product/">
        <div className="board-item">
          <img src={image} alt="Изображение" />
          <div className="board-item_content">
            <div className="board-item_content_title">Планшет</div>
            <div className="board-item_content_price">6 0000</div>
          </div>
        </div>
      </Link>
      <Link to="/product/">
        <div className="board-item">
          <img src={image} alt="Изображение" />
          Карточка 3
        </div>
      </Link>
      <Link to="/product/">
        <div className="board-item">
          <img src={image} alt="Изображение" />
          Карточка 4
        </div>
      </Link>
      <Link to="/product/">
        <div className="board-item">
          <img src={image} alt="Изображение" />
          Карточка 5
        </div>
      </Link>
      <Link to="/product/">
        <div className="board-item">
          <img src={image} alt="Изображение" />
          Карточка 6
        </div>
      </Link>
      <Link to="/product/">
        <div className="board-item">
          <img src={image} alt="Изображение" />
          Карточка 7
        </div>
      </Link>
      <Link to="/product/">
        <div className="board-item">
          <img src={image} alt="Изображение" />
          Карточка 8
        </div>
      </Link>
      <Link to="/product/">
        <div className="board-item">
          <img src={image} alt="Изображение" />
          Карточка 9
        </div>
      </Link>
      <Link to="/product/">
        <div className="board-item">
          <img src={image} alt="Изображение" />
          Карточка 10
        </div>
      </Link>
      <Link to="/product/">
        <div className="board-item">
          <img src={image} alt="Изображение" />
          Карточка 11
        </div>
      </Link>
      <Link to="/product/">
        <div className="board-item">
          <img src={image} alt="Изображение" />
          Карточка 12
        </div>
      </Link>
      <Link to="/product/">
        <div className="board-item">
          <img src={image} alt="Изображение" />
          Карточка 13
        </div>
      </Link>
      <Link to="/product/">
        <div className="board-item">
          <img src={image} alt="Изображение" />
          Карточка 14
        </div>
      </Link>
    </section>
  )
}

export default Board

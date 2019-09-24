import React from 'react'
import { Link } from 'react-router-dom'
import image from '../../assets/image.jpg'
import { IProduct } from '../../types/product'

const ProductCard: React.FC<IProduct> = (props) => {
  const { name, price, id } = props

  return (
    <Link to={`/product/${id}`}>
      <div className="board-item">
        <img src={image} alt="Изображение" />
        <div className="board-item_content">
          <div className="board-item_content_title">{name}</div>
          <div className="board-item_content_price">{price}</div>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard

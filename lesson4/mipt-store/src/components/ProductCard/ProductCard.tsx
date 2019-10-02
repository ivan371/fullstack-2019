import React from 'react'
import { Link } from 'react-router-dom'
import image from '../../assets/image.jpg'

interface IProductCard {
  product: IProduct
}

const ProductCard: React.FC<IProductCard> = (props) => {
  const { product } = props
  if (!product) {
    return null
  }
  const { name, price, id } = product

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

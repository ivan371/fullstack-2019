import React from 'react'
import { Link } from 'react-router-dom'
import defaultImage from '../../assets/image.jpg'
import * as S from './styled'

export interface IProductStateCardProps {
  product: IProduct
}

export interface IProductOwnCardProps {
  productId: number
}

interface IProductCardProps
  extends IProductStateCardProps,
    IProductOwnCardProps {}

const ProductCard: React.FC<IProductCardProps> = (props) => {
  const { product } = props

  if (!product) {
    return null
  }
  const { name, price, id, image } = product

  return (
    <Link to={`/product/${id}`}>
      <S.BoardItem>
        <img src={image || defaultImage} alt="Изображение" />
        <div>
          <S.Title>{name}</S.Title>
          <S.Price>{price}</S.Price>
        </div>
      </S.BoardItem>
    </Link>
  )
}

export default ProductCard

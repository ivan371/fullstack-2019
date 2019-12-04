import React from 'react'
import ProductCard from '../ProductCard'
import Spinner from '../../components/Spinner'
import * as S from './styled'

interface IBoardProps {
  fetchProducts: () => void
  productList: number[]
  isLoading: boolean
}

const Board: React.FC<IBoardProps> = (props) => {
  const { fetchProducts, productList, isLoading } = props

  React.useEffect(() => {
    fetchProducts()
  }, [])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <S.BoardSection>
      {productList.map((productId, index) => (
        <ProductCard key={index} productId={productId} />
      ))}
    </S.BoardSection>
  )
}

export default Board

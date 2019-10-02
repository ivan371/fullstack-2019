import React from 'react'
import ProductCard from '../ProductCard'
import Spinner from '../../components/Spinner'

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
    <section className="board">
      {productList.map((productId, index) => (
        <ProductCard key={index} productId={productId} />
      ))}
    </section>
  )
}

export default Board

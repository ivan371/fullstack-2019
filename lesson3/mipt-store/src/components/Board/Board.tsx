import React from 'react'
import ProductCard from '../ProductCard'
import { IProduct } from '../../types/product'

const Board: React.FC = () => {
  const [products, setProducts] = React.useState<IProduct[]>([])

  React.useEffect(() => {
    void productGet()
  }, [])

  const productGet = React.useCallback(async () => {
    const response = await fetch('http://localhost:3000/products')
    const data = await response.json()

    setProducts(data)
  }, [])

  return (
    <section className="board">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </section>
  )
}

export default Board

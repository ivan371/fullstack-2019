import React from 'react'
import iPhone from '../../assets/iphone.jpg'
import { IProduct } from '../../types/product'

interface IProductProps {
  match: {
    params: {
      productId: string
    }
  }
}

const Product: React.FC<IProductProps> = (props) => {
  React.useEffect(() => {
    void productGet()
  }, [])

  const [product, setProduct] = React.useState<IProduct>()
  const productGet = React.useCallback(async () => {
    const response = await fetch(
      `http://localhost:3000/products/${props.match.params.productId}`
    )

    const data = await response.json()
    setProduct(data)
  }, [])

  if (!product) {
    return null
  }

  const { name, price } = product

  return (
    <section className="product">
      <div className="product_title">
        <h2>{name}</h2>
        <p>{price}</p>
      </div>
      <img className="product_image" src={iPhone} alt="Айфон" />
    </section>
  )
}

export default Product

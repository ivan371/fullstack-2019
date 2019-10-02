import React from 'react'
import iPhone from '../../assets/iphone.jpg'
import Spinner from '../../components/Spinner'

export interface IProductStateProps {
  isLoading: boolean
  product: IProduct
}

export interface IProductDispatchProps {
  fetchProduct: (productId: string) => void
}

export interface IProductOwnProps {
  match: {
    params: {
      productId: string
    }
  }
}

interface IProductProps
  extends IProductStateProps,
    IProductDispatchProps,
    IProductOwnProps {}

const Product: React.FC<IProductProps> = (props) => {
  const { fetchProduct, match, isLoading, product } = props
  React.useEffect(() => {
    fetchProduct(match.params.productId)
  }, [])

  if (isLoading || !product) {
    return <Spinner />
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

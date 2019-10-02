import { connect } from 'react-redux'
import ProductCard from './ProductCard'

function mapStateToProps(state: any, props: any) {
  const { productId } = props

  return {
    product: state.products.products[productId]
  }
}

export default connect(mapStateToProps)(ProductCard)

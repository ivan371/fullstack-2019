import { connect } from 'react-redux'
import { fetchProduct } from '../../actions/products'
import Product from './Product'

function mapStateToProps(state: any, props: any) {
  return {
    product: state.products.products[props.match.params.productId],
    isLoading: state.products.isLoading
  }
}

const mapDispatchToProps = {
  fetchProduct
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product)

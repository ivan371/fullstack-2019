import { connect } from 'react-redux'
import { fetchProduct } from '../../actions/products'
import Product, {
  IProductStateProps,
  IProductDispatchProps,
  IProductOwnProps
} from './Product'

function mapStateToProps(
  state: IState,
  props: IProductOwnProps
): IProductStateProps {
  return {
    product: state.products.products[Number(props.match.params.productId)],
    isLoading: state.products.isLoading
  }
}

const mapDispatchToProps: IProductDispatchProps = {
  fetchProduct
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product)

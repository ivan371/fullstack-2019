import { connect } from 'react-redux'
import { fetchProduct } from '../../actions/products'
import { toggleModal } from '../../actions/modal'
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
  fetchProduct,
  toggleModal
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product)

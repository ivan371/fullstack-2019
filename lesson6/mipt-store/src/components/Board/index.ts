import { connect } from 'react-redux'
import { fetchProducts } from '../../actions/products'
import Board from './Board'

function mapStateToProps(state: IState) {
  return {
    productList: state.products.productList,
    isLoading: state.products.isLoading
  }
}

const mapDispatchToProps = {
  fetchProducts
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board)

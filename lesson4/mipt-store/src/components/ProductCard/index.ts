import { connect } from 'react-redux'
import ProductCard, {
  IProductStateCardProps,
  IProductOwnCardProps
} from './ProductCard'

function mapStateToProps(
  state: IState,
  props: IProductOwnCardProps
): IProductStateCardProps {
  const { productId } = props

  return {
    product: state.products.products[productId]
  }
}

export default connect(mapStateToProps)(ProductCard)

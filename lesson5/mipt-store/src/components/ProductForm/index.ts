import { connect } from 'react-redux'
import { productCreate, productUpdate } from '../../actions/products'

import ProductForm from './ProductForm'

const mapDispatchToPropsCreate = {
  productSave: productCreate
}

const mapDispatchToPropsUpdate = {
  productSave: productUpdate
}

export const ProductCreate = connect(
  null,
  mapDispatchToPropsCreate
)(ProductForm)

export const ProductUpdate = connect(
  null,
  mapDispatchToPropsUpdate
)(ProductForm)

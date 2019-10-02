import { Dispatch } from 'redux'
import { productsNormalize, productNormalize } from '../schemas/products'
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS'
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS'
export const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCTS_SUCCES'

export function fetchProducts() {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: FETCH_PRODUCTS
    })
    const response = await fetch('http://localhost:3000/products')
    const data = await response.json()

    dispatch({
      type: FETCH_PRODUCTS_SUCCESS,
      payload: productsNormalize(data)
    })
  }
}

export function fetchProduct(productId: string) {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: FETCH_PRODUCTS
    })
    const response = await fetch(`http://localhost:3000/products/${productId}`)
    const data = await response.json()

    dispatch({
      type: FETCH_PRODUCT_SUCCESS,
      payload: productNormalize(data)
    })
  }
}

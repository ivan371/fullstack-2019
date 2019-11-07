import { Dispatch } from 'redux'
import { productsNormalize, productNormalize } from '../schemas/products'
import ApiClientService from '../services/ApiClientService'
import { toggleModal } from './modal'

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS'
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS'
export const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCTS_SUCCES'

export function fetchProducts() {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({
        type: FETCH_PRODUCTS
      })

      const data = await ApiClientService('products/')

      if (data && Array.isArray(data)) {
        dispatch({
          type: FETCH_PRODUCTS_SUCCESS,
          payload: productsNormalize(data)
        })
      }
    } catch (err) {}
  }
}

export function fetchProduct(productId: string) {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: FETCH_PRODUCTS
    })
    const data = await ApiClientService(`products/${productId}/`)

    dispatch({
      type: FETCH_PRODUCT_SUCCESS,
      payload: productNormalize(data)
    })
  }
}

export function productCreate({ name, price, description }: IProduct) {
  return async () => {
    await ApiClientService('products/', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, price, description, owner: 1 })
    })
  }
}

export function productUpdate({ name, price, description, id }: IProduct) {
  return async (dispatch: Dispatch) => {
    const data = await ApiClientService(`products/${id}/`, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, price, description, owner: 1 })
    })

    dispatch({
      type: FETCH_PRODUCT_SUCCESS,
      payload: productNormalize(data)
    })

    dispatch(toggleModal())
  }
}

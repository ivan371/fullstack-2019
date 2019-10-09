import { Dispatch } from 'redux'
import { productsNormalize, productNormalize } from '../schemas/products'
import { toggleModal } from './modal'

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS'
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS'
export const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCTS_SUCCES'

const URL = 'http://localhost:3000/'

export function fetchProducts() {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: FETCH_PRODUCTS
    })
    const response = await fetch(`${URL}products`)
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
    const response = await fetch(`${URL}products/${productId}`)
    const data = await response.json()

    dispatch({
      type: FETCH_PRODUCT_SUCCESS,
      payload: productNormalize(data)
    })
  }
}

export function productCreate({ name, price, description }: IProduct) {
  return async () => {
    await fetch(`${URL}products`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, price, description, owner: 1 })
    })
  }
}

export function productUpdate({ name, price, description, id }: IProduct) {
  return async (dispatch: Dispatch) => {
    const response = await fetch(`${URL}products/${id}`, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, price, description, owner: 1 })
    })
    const data = await response.json()

    dispatch({
      type: FETCH_PRODUCT_SUCCESS,
      payload: productNormalize(data)
    })

    dispatch(toggleModal())
  }
}

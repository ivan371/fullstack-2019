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

export function productCreate({ name, price, description, image }: IProduct) {
  return async () => {
    const formData = new FormData()

    formData.append('name', name)
    formData.append('price', String(price))
    if (description) {
      formData.append('description', description)
    }
    if (image) {
      formData.append('image', image)
    }
    await ApiClientService('products/', {
      method: 'post',
      body: formData
    })
  }
}

export function productUpdate({
  name,
  price,
  description,
  id,
  image
}: IProduct) {
  return async (dispatch: Dispatch) => {
    const formData = new FormData()

    formData.append('name', name)
    formData.append('price', String(price))
    if (description) {
      formData.append('description', description)
    }
    if (image) {
      formData.append('image', image)
    }
    const data = await ApiClientService(`myproducts/${id}/`, {
      method: 'put',
      body: formData
    })

    dispatch({
      type: FETCH_PRODUCT_SUCCESS,
      payload: productNormalize(data)
    })

    dispatch(toggleModal())
  }
}

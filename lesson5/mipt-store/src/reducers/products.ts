import {
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS,
  FETCH_PRODUCT_SUCCESS
} from '../actions/products'

const initialState: IProductState = {
  productList: [],
  products: {},
  isLoading: false
}

interface IAction {
  type: string
  payload: {
    result: number[] | number
    entities: { product: { [key: number]: IProduct } }
  }
}

export default function(state = initialState, action: IAction) {
  switch (action.type) {
    case FETCH_PRODUCTS: {
      return {
        ...state,
        isLoading: true
      }
    }
    case FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        products: {
          ...state.products,
          ...action.payload.entities.product
        },
        productList: [action.payload.result as number],
        isLoading: false
      }
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload.entities.product,
        productList: action.payload.result as number[],
        isLoading: false
      }
  }
  return state
}

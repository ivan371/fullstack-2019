/// <reference types="react-scripts" />

interface IProduct {
  name: string
  price: number
  id: string
}

interface IProductState {
  isLoading: boolean
  productList: number[]
  products: { [key: number]: IProduct }
}

interface IState {
  products: IProductState
}
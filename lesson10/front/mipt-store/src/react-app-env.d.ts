/// <reference types="react-scripts" />

interface IProduct {
  name: string
  price: number
  id: string
  description?: string
  image: string
}

interface IProductState {
  isLoading: boolean
  productList: number[]
  products: { [key: number]: IProduct }
}

interface IModalState {
  isModalOpen: boolean
}

interface IState {
  products: IProductState
  modal: IModalState
}

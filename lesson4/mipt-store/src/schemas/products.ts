import { IProduct } from './../types/product'
import { normalize, schema } from 'normalizr'

const productSchema = new schema.Entity('product')

export function productsNormalize(products: IProduct[]) {
  return normalize(products, [productSchema])
}

export function productNormalize(products: IProduct) {
  return normalize(products, productSchema)
}

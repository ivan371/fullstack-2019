import React from 'react'
import { FormWrapper, FormItem } from '../styled'

interface IProductCreate {
  history?: {
    push: (url: string) => void
  }
  productSave: (product: IProduct) => void
  name?: string
  price?: number
  description?: string
  id?: number
  onSaveSuccess?: () => void
}

const ProductForm: React.FC<IProductCreate> = (props) => {
  const { history, productSave, id, onSaveSuccess } = props
  const [name, setName] = React.useState<string>(props.name || '')
  const [price, setPrice] = React.useState<number>(props.price!)
  const [description, setDescription] = React.useState<string>(
    props.description || ''
  )

  const onSubmit = React.useCallback(
    async (event) => {
      event.preventDefault()
      productSave({ name, price, description, id } as any)
      if (onSaveSuccess) {
        onSaveSuccess()
      }
      if (history) {
        history.push('')
      }
    },
    [name, price, description]
  )

  return (
    <FormWrapper>
      <form>
        <FormItem>
          <label htmlFor="name">Название товара</label>
          <input
            type="text"
            name="name"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </FormItem>
        <FormItem>
          <label htmlFor="price">Цена</label>
          <input
            type="text"
            name="price"
            required
            value={price}
            onChange={(event) => setPrice(parseInt(event.target.value))}
          />
        </FormItem>
        <FormItem>
          <label htmlFor="description">Описание</label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </FormItem>
        <button type="submit" onClick={onSubmit}>
          Отправить
        </button>
      </form>
    </FormWrapper>
  )
}

export default ProductForm

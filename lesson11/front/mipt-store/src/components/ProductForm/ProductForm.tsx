import React from 'react'
import { useDropzone } from 'react-dropzone'
import { FormWrapper, FormItem } from '../styled'
import * as S from './styled'

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

  const [image, setImage] = React.useState<File | null>(null)

  const onDrop = React.useCallback((acceptedFiles) => {
    if (acceptedFiles && acceptedFiles[0]) {
      setImage(acceptedFiles[0])
    }
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  const onSubmit = React.useCallback(
    async (event) => {
      event.preventDefault()
      productSave({ name, price, description, id, image } as any)
      if (onSaveSuccess) {
        onSaveSuccess()
      }
      if (history) {
        history.push('')
      }
    },
    [name, price, description, image]
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
        <FormItem>
          <label htmlFor="description">Картинка</label>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <S.FileInput isDragActive={isDragActive}>
              {(image && image.name) || 'Файл не выбран'}
            </S.FileInput>
          </div>
        </FormItem>
        <button type="submit" onClick={onSubmit}>
          Отправить
        </button>
      </form>
    </FormWrapper>
  )
}

export default ProductForm

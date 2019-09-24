import React from 'react'

interface IProductCreate {
  history: {
    push: (url: string) => void
  }
}

const ProductCreate: React.FC<IProductCreate> = ({ history }) => {
  const [name, setName] = React.useState<string>('')
  const [price, setPrice] = React.useState<number>()
  const [description, setDescription] = React.useState<string>('')

  const onSubmit = React.useCallback(
    async (event) => {
      event.preventDefault()
      await fetch('http://localhost:3000/products', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, price, description, owner: 1 })
      })
      history.push('')
    },
    [name, price, description]
  )

  return (
    <section className="create-form">
      <form>
        <div className="form-item">
          <label htmlFor="name">Название товара</label>
          <input
            type="text"
            name="name"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="form-item">
          <label htmlFor="price">Цена</label>
          <input
            type="text"
            name="price"
            required
            value={price}
            onChange={(event) => setPrice(parseInt(event.target.value))}
          />
        </div>
        <div className="form-item">
          <label htmlFor="description">Описание</label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <button type="submit" onClick={onSubmit}>
          Отправить
        </button>
      </form>
    </section>
  )
}

export default ProductCreate

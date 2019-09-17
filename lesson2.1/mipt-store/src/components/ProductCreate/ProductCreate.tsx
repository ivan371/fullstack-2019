import React from 'react'

const ProductCreate: React.FC = () => {
  return (
    <section className="create-form">
      <form>
        <div className="form-item">
          <label htmlFor="name">Название товара</label>
          <input type="text" name="name" required />
        </div>
        <div className="form-item">
          <label htmlFor="price">Цена</label>
          <input type="text" name="price" required />
        </div>
        <div className="form-item">
          <label htmlFor="description">Описание</label>
          <input type="text" name="description" />
        </div>
        <button type="submit">Отправить</button>
      </form>
    </section>
  )
}

export default ProductCreate

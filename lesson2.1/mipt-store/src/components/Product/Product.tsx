import React from 'react'
import iPhone from '../../assets/iphone.jpg'

const Product: React.FC = () => {
  return (
    <section className="product">
      <div className="product_title">
        <h2>Мобильный телефон</h2>
        <p>10 000</p>
      </div>
      <img className="product_image" src={iPhone} alt="Айфон" />
    </section>
  )
}

export default Product

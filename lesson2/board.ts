const productListKey = 'productList'

interface Product {
  name: string
  price: number
}

const board = () => {
  const boardContainer = document.querySelector('section')

  const productList = JSON.parse(window.sessionStorage.getItem(productListKey)) || []
  productList.forEach(function(product: Product) {
    const productNode = document.createElement('a')
    productNode.href = 'product.html'

    productNode.innerHTML = `
    <div class="board-item"> 
          <image src="assets/image.jpg"/>
          <div class="board-item_content">
            <div class="board-item_content_title">
              ${product.name}
            </div>
            <div class="board-item_content_price">
            ${product.price}
            </div>
          </div>
        </div>`
      boardContainer.appendChild(productNode)
  })
}

board()
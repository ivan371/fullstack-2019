const productListKey = 'productList'

function productCreate() {
  const button = document.querySelector('button')
  const inputs = document.querySelectorAll('input')
  const produtList = JSON.parse(window.sessionStorage.getItem(productListKey)) || []
  const product = {}

  button.onclick = function(event) {
    event.preventDefault()

    inputs.forEach(function(input) {
      product[input.name] = input.value
    })
    produtList.push(product)
    window.sessionStorage.setItem(productListKey, JSON.stringify(produtList))
    window.location.href = 'index.html'
  }
}

productCreate()
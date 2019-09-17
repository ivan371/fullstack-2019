var productListKey = 'productList';
var board = function () {
    var boardContainer = document.querySelector('section');
    var productList = JSON.parse(window.sessionStorage.getItem(productListKey)) || [];
    productList.forEach(function (product) {
        var productNode = document.createElement('a');
        productNode.href = 'product.html';
        productNode.innerHTML = "\n    <div class=\"board-item\"> \n          <image src=\"assets/image.jpg\"/>\n          <div class=\"board-item_content\">\n            <div class=\"board-item_content_title\">\n              " + product.name + "\n            </div>\n            <div class=\"board-item_content_price\">\n            " + product.price + "\n            </div>\n          </div>\n        </div>";
        boardContainer.appendChild(productNode);
    });
};
board();

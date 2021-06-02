class ProductList {
    _goods;
    _allProducts;
    constructor(container = '.products') {
        this.container = container;
        this._goods = [];
        this._allProducts = [];

        this._fetchGoods();
        this._render();
    }

    _fetchGoods() {
        this._goods = [{
                id: 1,
                title: 'Notebook',
                price: 20000
            },
            {
                id: 2,
                title: 'Mouse',
                price: 1500
            },
            {
                id: 3,
                title: 'Keyboard',
                price: 5000
            },
            {
                id: 4,
                title: 'Gamepad',
                price: 4500
            },
        ];
    }

    totalPrice() {
        return this._goods.reduce((sum, goods) => sum + goods.price, 0);
    }

    _render() {
        const block = document.querySelector(this.container);

        for (let product of this._goods) {
            const productObject = new ProductItem(product);

            this._allProducts.push(productObject);
            block.insertAdjacentHTML('beforeend', productObject.render());
        }
    }
}

class ProductItem {
    constructor(product, img = 'https://via.placeholder.com/300x300') {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = img;
    }

    render() {
        return `<div class="product-item" data-id="${this.id}">
              <img src="${this.img}" alt="Some img">
                  <h3>${this.title}</h3>
                  <p>${this.price} \u20bd</p>
                  <button class="buy-btn">Купить</button>
          </div>`;
    }
}

const catalog = new ProductList();

class Cart {
    constructor() {}

    render() {}
}

class CartItem {
    constructor() {}

    render() {}
}
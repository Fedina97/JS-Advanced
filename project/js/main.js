const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

let getRequest = (url, cb) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status !== 200) {
                console.log('Error!');
            } else {
                cb(xhr.responseText);
            }
        }
    };
    xhr.send();
};

class ProductList {
    _goods;
    _allProducts;
    constructor(container = '.products') {
        this.container = container;
        this._goods = [];
        this._allProducts = [];

        this._getProducts()
            .then((data) => {
                this._goods;
                this._render;
            })

        // this._fetchGoods();
        // this._render();
    }

    // _fetchGoods() {
    //     getRequest(`${API}/catalogData.json`, (data) => {
    //         this._goods = JSON.parse(data);
    //         this._render();
    //     });
    // }

    _getProducts() {
        return fetch(`${API}/catalogData.json`)
            .then((response) => response.json())
            .catch((err) => console.log(err));
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
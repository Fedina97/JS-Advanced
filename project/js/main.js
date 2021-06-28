const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';


const app = new Vue({
    el: '#app',
    data: {
        url: '/catalogData.json',
        urlAdd: '/addToBasket.json',
        products: [],
        img: 'https://via.placeholder.com/200x150',
        searchLine: '',
        quantity: 0,
        filtered: [],
        cartItem: [],
        isVisibleCart: true,
        cartUrl: '/getBasket.json',
        cartImg: 'https://via.placeholder.com/50x100'
    },
    methods: {
        getJson(url) {
            return fetch(url ? url : `${API + this.url}`)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                });
        },

        addProduct(product) {
            console.log(product);
            this.getJson(`${API + this.urlAdd}`)
                .then((data) => {
                    if (data.result === 1) {
                        let findItems = this.cartItem.find(prod => prod.id_product === product.id_product);
                        if (findItems) {
                            findItems.quantity++;
                        } else {
                            let good = Object.assign({
                                quantity: 1
                            }, product);
                            this.cartItem.push(good);
                        }
                    } else {
                        alert('Error');
                    }
                })
        },

        filterGoods() {
            const regexp = new RegExp(this.searchLine, 'i');
            this.filtered = this.products.filter(product => regexp.test(product.product_name));
        },

    },

    created() {
        this.getJson(`${API + this.url}`)
            .then((data) => {
                for (let el of data) {
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
    }
});
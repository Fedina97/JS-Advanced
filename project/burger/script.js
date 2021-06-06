class Hamburger {
    constructor(size, topping, sause) {
        this.size = size;
        this.topping = topping;
        this.sause = sause;

        this.getElem();
    }

    getElem() {
        const checkedSize = document.querySelector(`input[name=${this.size}]:checked`);
        const checkedTopping = document.querySelector(`input[name=${this.topping}]:checked`);
        const checkedSause = document.querySelectorAll(`input[name=${this.sause}]:checked`);

        const priceSize = checkedSize.dataset.price;
        const caloriesSize = checkedSize.dataset.calories;
        const {
            price: priceTopping,
            calories: caloriesTopping
        } = checkedTopping.dataset;

        let startCost = 0;
        let startCalories = 0;

        checkedSause.forEach(elem => {
            startCost += +elem.dataset.price;
            startCalories += +elem.dataset.calories;
        });

        let sumCost = +priceTopping + +priceSize;
        let sumCalories = +caloriesSize + +caloriesTopping;
        sumCost += +startCost;
        sumCalories += +startCalories;

        console.log(sumCost, sumCalories);
        const cost = document.querySelector('.costed');
        const calor = document.querySelector('.calories');
        cost.innerHTML = sumCost + ' рублей';
        calor.innerHTML = sumCalories + ' калорий';
    }

    render() {}
}
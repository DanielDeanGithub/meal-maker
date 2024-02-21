const menu = {
    _meal: '',
    _price: 0,
    set meal(mealToCheck) {
        if (typeof mealToCheck === 'string') return this._meal = mealToCheck;
    },
    set price(priceToCheck) {
        if (typeof priceToCheck === 'number') return this._price = priceToCheck;
    },
    get todaysSpecial() {
        
    }
};

menu.meal = 'pizza';
menu.price = 5;

console.log(menu._meal);
console.log(menu._price);
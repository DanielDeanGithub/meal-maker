const menu = {
    _meal: '',
    _price: 0,

    set meal(mealToCheck) {
        if (typeof mealToCheck === 'string') return this._meal = mealToCheck;
    }
};

"use strict";
{
    const user = {
        name: 'abc',
        age: 20,
        address: "Dhaka"
    };
    const car = {
        model: "xyz",
        price: 1200
    };
    const getPropertyValue = (obj, key) => {
        return obj[key];
    };
    console.log(getPropertyValue(user, 'address'));
}

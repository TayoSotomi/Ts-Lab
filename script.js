"use strict";
exports.__esModule = true;
//Declare an array called mountains 
var mountains = [
    {
        name: "Kilimanjaro",
        height: 19341
    },
    {
        name: "Everest",
        height: 29029
    },
    {
        name: "Denali",
        height: 20310
    }
];
//Declare a function called findNameOfTallestMountain
function findNameOfTallestMountain(mountains) {
    var tallestMountain = mountains.reduce(function (prev, current) { return (prev.height > current.height) ? prev : current; });
    return tallestMountain.name;
}
//Call findNameOfTallestMountain
var MountainName = findNameOfTallestMountain(mountains);
console.log(MountainName);
//Declare an array called products 
var products = [
    {
        name: "TV",
        price: 1000
    },
    {
        name: "DVD Player",
        price: 500
    },
    {
        name: "Blu Ray",
        price: 200
    },
    {
        name: "MacLaptop",
        price: 2500
    }
];
//Declare a function called calcAverageProductPrice
function calcAverageProductPrice(products) {
    var cost = 0;
    products.forEach(function (p) {
        return cost += p.price;
    });
    var avgPrice = cost / products.length;
    return avgPrice;
}
//Call calcAverageProductPrice,
var AvgPrice = calcAverageProductPrice(products);
console.log(AvgPrice);
// Declare an interface called InventoryItem
var inventory = [
    {
        product: {
            name: "motor",
            price: 10.00
        },
        quantity: 10
    },
    {
        product: {
            name: "sensor",
            price: 12.50
        },
        quantity: 4
    },
    {
        product: {
            name: "LED",
            price: 1.00
        },
        quantity: 20
    },
];
//Declare a function called calcInventoryValue
function calcinventoryValue(inventory) {
    var totalValue = 0;
    inventory.forEach(function (e) {
        totalValue += e.product.price * e.quantity;
    });
    return totalValue;
}
//Call calcInventoryValue 
var value = calcinventoryValue(inventory);
console.log(value);
